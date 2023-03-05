export const PlaylistPlug = () => {
    let trackBlockList = []
    for (let i = 1; i <= 8; i++)
        trackBlockList.push(<PlaylistPlugItem key={i} />)

    return (
        <div>
            <p className="loadingText">Loading...</p>
            <div className="content__playlist playlist-plug">
                {trackBlockList}
            </div>
        </div>
    )
}

const PlaylistPlugItem = () => {
    const titleString = 'Track loading...'
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
                            {titleString}
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
