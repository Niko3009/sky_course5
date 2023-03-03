import { useContext } from 'react'
import { appContext } from 'app'

export const PrevBtn = () => {
    return <ControlBtn name={'prev'} type={null} />
}

export const PlayBtn = ({ onElmClick, activity }) => {
    const style = activity ? { backgroundColor: '#d9d9d9' } : {}

    return (
        <ControlBtn
            name={'play'}
            type={null}
            onElmClick={onElmClick}
            style={style}
        />
    )
}

export const NextBtn = () => {
    return <ControlBtn name={'next'} type={null} />
}

export const RepeatBtn = ({ onElmClick, activity }) => {
    const style = activity ? { stroke: '#0055ff' } : {}

    return (
        <ControlBtn
            name={'repeat'}
            type={'icon'}
            onElmClick={onElmClick}
            style={style}
        />
    )
}

export const ShuffleBtn = () => {
    return <ControlBtn name={'shuffle'} type={'icon'} />
}

export const NoteIcon = () => {
    return (
        <Icon
            divClass={`track-play__image`}
            svgClass={`track-play__svg`}
            alt={'music'}
            src={`/img/icon/sprite.svg#icon-note`}
        />
    )
}

export const VolumeIcon = ({ onElmClick }) => {
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
            onElmClick={onElmClick}
            style={style}
        />
    )
}

export const VolumeBar = ({ volumeRef, volumeLevel, switchVolume }) => {
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
                onChange={() => switchVolume()}
            />
        </div>
    )
}

export const ControlBtn = ({ name, type, onElmClick, style = {} }) => {
    const typeClass = type === 'icon' ? `_btn` : `_btn-icon`

    return (
        <Icon
            divClass={`player__btn-${name} ${typeClass}`}
            svgClass={`player__btn-${name}-svg`}
            alt={name}
            src={`/img/icon/sprite.svg#icon-${name}`}
            onElmClick={onElmClick}
            style={style}
        />
    )
}

export const Icon = ({
    divClass,
    svgClass,
    alt,
    src,
    onElmClick,
    style = {},
}) => {
    return (
        <div className={divClass}>
            <svg
                className={svgClass}
                alt={alt}
                onClick={onElmClick}
                style={style}
            >
                <use xlinkHref={src}></use>
            </svg>
        </div>
    )
}
