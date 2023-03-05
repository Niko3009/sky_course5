import { useRef, useEffect, useContext } from 'react'

import { appContext } from 'app'

import { ProgressBarStyle } from './playerStyle'

export const ProgressBar = ({ audioRef, relTrackTime }) => {
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
