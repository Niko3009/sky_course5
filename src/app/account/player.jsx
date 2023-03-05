import { useRef, useEffect, useState, useContext } from 'react'
import { useSelector } from 'react-redux'

import { appContext } from 'app'
import { userContext } from 'app/account'
import { trackFromStore } from 'back/selectors/accountSelector'
import { trackListFromStore } from 'back/selectors/accountSelector'

import { ProgressBar } from './player/progressBar'
import { ControlBlock } from './player/controlBlock'
import { PlayerBarStyle } from './player/playerStyle'

export const Player = () => {
    const track = useSelector(trackFromStore)
    const trackList = useSelector(trackListFromStore)
    const trackSrc = track ? track['track_file'] : null
    return <PlayerBar track={track} trackSrc={trackSrc} trackList={trackList} />
}

export const PlayerBar = ({ track, trackSrc, trackList }) => {
    const appTheme = useContext(appContext).appTheme
    const changeTrack = useContext(userContext)?.account.changeTrack

    const audioRef = useRef()

    const [audioSrc, setAudioSrc] = useState(null)
    const [playStatus, setPlayStatus] = useState(false)
    const [relTrackTime, setRelTrackTime] = useState(0)
    const [volumeLevel, setVolumeLevel] = useState(0.04)
    const [repeatStatus, setRepeatStatus] = useState(false)
    const [shuffleStatus, setShuffleStatus] = useState(false)

    const playerSetting = {
        playStatus,
        relTrackTime,
        volumeLevel,
        repeatStatus,
        shuffleStatus,
    }
    const playerControl = {
        setVolumeLevel,
        setRepeatStatus,
        setShuffleStatus,
        timeUpdate: () => {},
        switchPlay: () => {},
        switchTrack: () => {},
    }
    playerControl.timeUpdate = (audio) => {
        const time = audio.currentTime
        const duration = audio.duration
        let newRelTrackTime = relTimeCalc(time, duration)
        if (!newRelTrackTime) newRelTrackTime = 0
        if (newRelTrackTime !== relTrackTime) setRelTrackTime(newRelTrackTime)
        if (newRelTrackTime === 1)
            if (repeatStatus) audio.play()
            else playerControl.switchTrack('next')
    }
    playerControl.switchPlay = () => {
        const audio = audioRef.current
        const trackTime = relTrackTime * audio.duration
        audio.currentTime = relTrackTime !== 1 ? trackTime : 0
        audio.paused ? audio.play() : audio.pause()
    }
    playerControl.switchTrack = (direction) =>
        switchTrack(direction, shuffleStatus, track, trackList, changeTrack)

    useEffect(() => {
        const audio = audioRef.current
        if (audioSrc !== trackSrc) setAudioSrc(trackSrc)
        if (playStatus !== !audio.paused) setPlayStatus(!playStatus)
        if (audioSrc && relTrackTime === 0) audio.play()
        audio.volume = volumeLevel
    })

    return (
        <PlayerBarStyle data={appTheme.current}>
            <audio
                ref={audioRef}
                src={audioSrc ? audioSrc : ''}
                onTimeUpdate={() => {
                    playerControl.timeUpdate(audioRef.current)
                }}
            />

            <ProgressBar audioRef={audioRef} relTrackTime={relTrackTime} />

            <ControlBlock
                track={track}
                playerSetting={playerSetting}
                playerControl={playerControl}
            />
        </PlayerBarStyle>
    )
}

const relTimeCalc = (time, duration) => {
    const dot = 10 ** 6
    const newRelTrackTime = Math.floor((time / duration) * dot) / dot
    return newRelTrackTime
}

const switchTrack = (
    direction,
    shuffleStatus,
    track,
    trackList,
    changeTrack
) => {
    if (!trackList.length) changeTrack(track)

    let newTrackNum
    if (shuffleStatus) {
        newTrackNum = Math.floor(Math.random() * trackList.length)
        if (trackList[newTrackNum].id === track.id) newTrackNum++
    } else {
        let currentTrackNum = -1
        Object.keys(trackList).forEach((N) => {
            if (trackList[N].id === track.id) currentTrackNum = Number(N)
        })
        newTrackNum = currentTrackNum + (direction === 'next' ? 1 : -1)
    }

    if (newTrackNum < 0) newTrackNum = trackList.length - 1
    if (newTrackNum >= trackList.length) newTrackNum = 0

    changeTrack(trackList[newTrackNum])
}
