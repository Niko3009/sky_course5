export const TrackTitle = ({ track, changeTrack }) => {
    return (
        <div className="track__title">
            <div className="track__title-image">
                <svg className="track__title-svg" alt="music">
                    <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                </svg>
            </div>
            <div
                className="track__title-text"
                onClick={() => {
                    changeTrack(track)
                }}
            >
                <a className="track__title-link" href="#">
                    {track.name}
                    <span className="track__title-span">
                        {track['release_date']
                            ? `(${track['release_date']})`
                            : ''}
                    </span>
                </a>
            </div>
        </div>
    )
}

export const TrackAuthor = ({ track }) => {
    return (
        <div className="track__author">
            <a className="track__author-link" href="#">
                {track.author}
            </a>
        </div>
    )
}

export const TrackAlbum = ({ track }) => {
    return (
        <div className="track__album">
            <a className="track__album-link" href="#">
                {track.album}
            </a>
        </div>
    )
}

export const TrackTime = ({ track, isItLike, changeLike }) => {
    const duration = track.duration_in_seconds
    const min = Math.floor(duration / 60)
    const sec = duration - min * 60
    const time = min + ':' + (sec > 10 ? sec : '0' + sec)

    return (
        <div className="track__time">
            <svg
                className="track__time-svg"
                alt="time"
                style={isItLike ? { stroke: 'red', fill: 'red' } : {}}
                onClick={changeLike}
            >
                <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
            </svg>
            <span className="track__time-text">{time}</span>
        </div>
    )
}
