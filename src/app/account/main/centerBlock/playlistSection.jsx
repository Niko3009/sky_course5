import React from 'react'
const { useEffect } = React

const PlaylistTitle = () => {
    return (
        <div className="content__title playlist-title">
            <div className="playlist-title__col col01">Трек</div>
            <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
            <div className="playlist-title__col col03">АЛЬБОМ</div>
            <div className="playlist-title__col col04">
                <svg className="playlist-title__svg" alt="time">
                    <use xlinkHref="/img/icon/sprite.svg#icon-watch"></use>
                </svg>
            </div>
        </div>
    )
}

const Playlist = (props) => {
    const tracks = props.tracks
    const filter = props.filter

    let trackBlockList = []
    let trackNumber = 0
    Object.keys(tracks).forEach((key) => {
        const track = tracks[key]
        trackNumber++
        const playlistItem = (
            <PlaylistItem key={trackNumber} trackData={track} />
        )

        if (filter.filterItem === null) {
            trackBlockList.push(playlistItem)
        } else {
            if (track[filter.filterType] === filter.filterItem)
                trackBlockList.push(playlistItem)
        }
    })

    return <div className="content__playlist playlist"> {trackBlockList} </div>

    function PlaylistItem(properties) {
        const props = properties.trackData

        return (
            <div className="playlist__item">
                <div className="playlist__track track">
                    <div className="track__title">
                        <div className="track__title-image">
                            <svg className="track__title-svg" alt="music">
                                <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                            </svg>
                        </div>
                        <div className="track__title-text">
                            <a className="track__title-link" href="#">
                                {props.title}{' '}
                                <span className="track__title-span">
                                    {props.titleSpan}
                                </span>
                            </a>
                        </div>
                    </div>

                    <div className="track__author">
                        <a className="track__author-link" href="#">
                            {props.author}
                        </a>
                    </div>

                    <div className="track__album">
                        <a className="track__album-link" href="#">
                            {props.album}
                        </a>
                    </div>

                    <div className="track__time">
                        <svg className="track__time-svg" alt="time">
                            <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
                        </svg>
                        <span className="track__time-text">{props.time}</span>
                    </div>
                </div>
            </div>
        )
    }
}

const PlaylistPlug = (props) => {
    const showDelay = 2
    useEffect(() => {
        let timerId

        timerId = setTimeout(() => {
            props.loadTrackList()
        }, 1000 * showDelay)

        return () => {
            clearTimeout(timerId)
        }
    })

    let trackBlockList = []
    for (let i = 1; i <= 8; i++)
        trackBlockList.push(<PlaylistPlugItem key={i} />)

    return (
        <div className="content__playlist playlist-plug">{trackBlockList}</div>
    )

    function PlaylistPlugItem() {
        const plugString = '       '
        return (
            <div className="playlist__item">
                <div className="playlist__track track">
                    <div className="track__title">
                        <div className="track__title-image">
                            <svg className="track__title-svg" alt="music">
                                <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                            </svg>
                        </div>
                        <div className="track__title-text">
                            <a className="track__title-link" href="#">
                                {plugString}
                                <span className="track__title-span">
                                    {plugString}
                                </span>
                            </a>
                        </div>
                    </div>

                    <div className="track__author">
                        <a className="track__author-link" href="#">
                            {plugString}
                        </a>
                    </div>

                    <div className="track__album">
                        <a className="track__album-link" href="#">
                            {plugString}
                        </a>
                    </div>

                    <div className="track__time">
                        <svg className="track__time-svg" alt="time">
                            <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
                        </svg>
                        <span className="track__time-text">{plugString}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export const PlaylistSection = (props) => {
    return (
        <div className="centerblock__content">
            <PlaylistTitle />
            {props.isTrackListLoaded && (
                <Playlist tracks={props.tracks} filter={props.filter} />
            )}
            {!props.isTrackListLoaded && (
                <PlaylistPlug loadTrackList={props.loadTrackList} />
            )}
        </div>
    )
}
