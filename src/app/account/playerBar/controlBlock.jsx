import { useRef, useEffect } from 'react'

import { useContext } from 'react'
import { appContext } from 'app'

// import { Link } from 'react-router-dom'

export const ControlBlock = ({
    audioRef,
    playStatus,
    relTrackTime,
    volumeLevel,
    setVolumeLevel,
    repeatStatus,
    setRepeatStatus,
}) => {
    useEffect(() => {
        audio = audioRef.current
        volume = volumeRef.current

        volume.addEventListener('change', switchVolume)
    })

    const volumeRef = useRef()

    const switchPlayback = () => {
        const trackDuration = audio.duration
        const trackTime = relTrackTime * trackDuration

        if (audio.paused) {
            audio.currentTime = trackTime !== trackDuration ? trackTime : 0
            audio.play()
        } else {
            audio.pause()
        }
    }

    const switchVolume = () => {
        const newVolume = volume.value
        setVolumeLevel(newVolume)
    }

    const muteVolume = () => {
        volume.value = 0
        setVolumeLevel(0)
    }

    const switchRepeatStatus = () => {
        setRepeatStatus(!repeatStatus)
    }

    let audio
    let volume

    return (
        <div className="bar__player-block">
            <div className="bar__player player">
                <div className="player__controls">
                    <PrevBtn />

                    <PlayBtn action={switchPlayback} activity={playStatus} />

                    <NextBtn />

                    <RepeatBtn
                        action={switchRepeatStatus}
                        activity={repeatStatus}
                    />

                    <ShuffleBtn />
                </div>

                <div className="player__track-play track-play">
                    <div className="track-play__contain">
                        <NoteIcon />

                        <a className="track-play__author-link" href="#">
                            Dropin
                        </a>

                        <a className="track-play__album-link" href="#">
                            Bobby...
                        </a>
                    </div>

                    <div className="track-play__like-dis">
                        <LikeBtn name={'like'} />
                        <LikeBtn name={'dislike'} />
                    </div>
                </div>
            </div>

            <div className="bar__volume-block volume volume__content">
                <VolumeIcon action={muteVolume} />
                <VolumeBar volumeRef={volumeRef} volumeLevel={volumeLevel} />
            </div>
        </div>
    )
}

const PrevBtn = () => {
    return <ControlBtn name={'prev'} type={null} />
}

const PlayBtn = ({ action, activity }) => {
    const style = activity ? { backgroundColor: '#d9d9d9' } : {}

    return (
        <ControlBtn name={'play'} type={null} action={action} style={style} />
    )
}

const NextBtn = () => {
    return <ControlBtn name={'next'} type={null} />
}

const RepeatBtn = ({ action, activity }) => {
    const style = activity ? { stroke: '#0055ff' } : {}

    return (
        <ControlBtn
            name={'repeat'}
            type={'icon'}
            action={action}
            style={style}
        />
    )
}

const ShuffleBtn = () => {
    return <ControlBtn name={'shuffle'} type={'icon'} />
}

const LikeBtn = ({ name }) => {
    return (
        <Icon
            divClass={`track-play__${name} _btn-icon`}
            svgClass={`track-play__${name}-svg`}
            alt={name}
            src={`/img/icon/sprite.svg#icon-${name}`}
        />
    )
}

const NoteIcon = () => {
    return (
        <Icon
            divClass={`track-play__image`}
            svgClass={`track-play__svg`}
            alt={'music'}
            src={`/img/icon/sprite.svg#icon-note`}
        />
    )
}

const VolumeIcon = ({ action }) => {
    const appTheme = useContext(appContext).appTheme

    const style = {
        stroke: appTheme.current.colorN1,
        fill: appTheme.current.colorN1,
    }

    return (
        <Icon
            divClass={`volume__image`}
            svgClass={`volume__svg`}
            alt={'volume'}
            src={`/img/icon/sprite.svg#icon-volume`}
            action={action}
            style={style}
        />
    )
}

const VolumeBar = ({ volumeRef, volumeLevel }) => {
    return (
        <div className="volume__progress _btn">
            <input
                ref={volumeRef}
                className="volume__progress-line _btn"
                type="range"
                name="range"
                min="0"
                max="1"
                step="0.01"
                defaultValue={volumeLevel}
            />
        </div>
    )
}

const ControlBtn = ({ name, type, action, style = {} }) => {
    const typeClass = type === 'icon' ? `_btn` : `_btn-icon`

    return (
        <Icon
            divClass={`player__btn-${name} ${typeClass}`}
            svgClass={`player__btn-${name}-svg`}
            alt={name}
            src={`/img/icon/sprite.svg#icon-${name}`}
            action={action}
            style={style}
        />
    )
}

const Icon = ({ divClass, svgClass, alt, src, action, style = {} }) => {
    return (
        <div className={divClass}>
            <svg className={svgClass} alt={alt} onClick={action} style={style}>
                <use xlinkHref={src}></use>
            </svg>
        </div>
    )
}
