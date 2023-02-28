import { useRef, useEffect, useState, useContext } from 'react'
import { useSelector } from 'react-redux'

import { appContext } from 'app'
import { trackFromStore } from 'back/selectors/accountSelector'

import { ControlBlock } from './player/controlBlock'
import { PlayerBarStyle, ProgressBarStyle } from './player/playerStyle'

export const Player = () => {
    const track = useSelector(trackFromStore)
    const trackSrc = track ? track['track_file'] : null
    return <PlayerBar track={track} trackSrc={trackSrc} />
}

export const PlayerBar = ({ track, trackSrc }) => {
    const appTheme = useContext(appContext).appTheme
    const audioRef = useRef()

    const [audioSrc, setAudioSrc] = useState(null)
    const [playStatus, setPlayStatus] = useState(false)
    const [relTrackTime, setRelTrackTime] = useState(0)
    const [volumeLevel, setVolumeLevel] = useState(0.04)
    const [repeatStatus, setRepeatStatus] = useState(true)

    const playerControl = {
        setVolumeLevel,
        setRepeatStatus,
        timeUpdate: () => {},
        switchPlayback: () => {},
    }
    const playerSetting = {
        playStatus,
        relTrackTime,
        volumeLevel,
        repeatStatus,
    }

    playerControl.timeUpdate = (audio) => {
        const time = audio.currentTime
        const duration = audio.duration
        let newRelTrackTime = relTimeCalc(time, duration)
        if (!newRelTrackTime) newRelTrackTime = 0
        if (newRelTrackTime !== relTrackTime) setRelTrackTime(newRelTrackTime)
        if (newRelTrackTime === 1 && repeatStatus) audio.play()
    }
    playerControl.switchPlayback = () => {
        const audio = audioRef.current
        const trackTime = relTrackTime * audio.duration
        audio.currentTime = relTrackTime !== 1 ? trackTime : 0
        audio.paused ? audio.play() : audio.pause()
    }

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

const ProgressBar = ({ audioRef, relTrackTime }) => {
    const appTheme = useContext(appContext).appTheme
    const barRef = useRef()

    useEffect(() => {
        const audio = audioRef.current
        barRef.current.addEventListener('click', (click) => {
            const absX = click.pageX
            const barX = absX - barRef.current.offsetLeft
            const barWidth = barRef.current.offsetWidth
            const newTrackTime = (barX / barWidth) * audio.duration
            audio.currentTime = newTrackTime
        })
    })

    const style = { width: `${relTrackTime * 100}%` }

    return (
        <ProgressBarStyle ref={barRef} data={appTheme.current}>
            <div style={style}></div>
        </ProgressBarStyle>
    )
}

const relTimeCalc = (time, duration) => {
    const dot = 10 ** 6
    const newRelTrackTime = Math.floor((time / duration) * dot) / dot
    return newRelTrackTime
}
