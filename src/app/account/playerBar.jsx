import { PlayerBarStyle, ProgressBarStyle } from './playerBar/playerBarStyle'

import { useRef, useEffect, useState } from 'react'

import { useContext } from 'react'
import { appContext } from 'app'

import { ControlBlock } from './playerBar/controlBlock'

export const PlayerBar = () => {
    const appTheme = useContext(appContext).appTheme

    const audioRef = useRef()

    // const [songs, setSongs] = userstate(songs.data)
    // const [isPlaying, setIsPlaying] = useState(false)
    // const [currentSong, setCurrentSong] = useState(songs.data[0])
    const [playStatus, setPlayStatus] = useState(false)
    const [relTrackTime, setRelTrackTime] = useState(0)
    const [volumeLevel, setVolumeLevel] = useState(0.1)
    const [repeatStatus, setRepeatStatus] = useState(true)

    const timeUpdate = () => {
        const trackTime = audio.currentTime
        const trackDuration = audio.duration

        const accuracy = 10 ** 6
        const newRelTrackTime =
            Math.floor((trackTime / trackDuration) * accuracy) / accuracy

        if (newRelTrackTime !== relTrackTime) setRelTrackTime(newRelTrackTime)

        if (newRelTrackTime === 1 && repeatStatus) audio.play()
    }

    const track = 'Bobby_Marleni_-_Dropin'

    let audio
    useEffect(() => {
        audio = audioRef.current
        audio.volume = volumeLevel
        if (playStatus !== !audio.paused) setPlayStatus(!playStatus)
    })

    return (
        <PlayerBarStyle data={appTheme.current}>
            <audio
                // controls
                ref={audioRef}
                src={`/media/${track}.mp3`}
                onTimeUpdate={timeUpdate}
            />

            <ProgressBar audioRef={audioRef} relTrackTime={relTrackTime} />
            <ControlBlock
                audioRef={audioRef}
                playStatus={playStatus}
                relTrackTime={relTrackTime}
                volumeLevel={volumeLevel}
                setVolumeLevel={setVolumeLevel}
                repeatStatus={repeatStatus}
                setRepeatStatus={setRepeatStatus}
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
