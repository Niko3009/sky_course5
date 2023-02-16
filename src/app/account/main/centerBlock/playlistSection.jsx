import React from 'react'
import { useContext } from 'react'

import { appContext } from 'app'
import { userContext } from 'app/account'
import {
    useAddLikeMutation,
    useDeleteLikeMutation,
} from 'back/services/signApi'

export const PlaylistSection = ({ tracks, filter, sort, requestData }) => {
    const sortType = sort.sortType

    if (sortType === 'release_date') sortByDate(tracks)

    function sortByDate(tracks) {
        tracks.sort(function (a, b) {
            let millisecondsA = new Date(a.release_date).getTime()
            let millisecondsB = new Date(b.release_date).getTime()
            if (millisecondsA === 0) millisecondsA = -(10 ** 20)
            if (millisecondsB === 0) millisecondsA = -(10 ** 20)
            if (millisecondsA > millisecondsB) return -1
            if (millisecondsA < millisecondsB) return 1
            return 0
        })
    }

    return (
        <div className="centerblock__content">
            <PlaylistTitle />
            {requestData.dataHasArrived && (
                <Playlist tracks={tracks} filter={filter} />
            )}
            {!requestData.dataHasArrived && <PlaylistPlug />}
        </div>
    )
}

const Playlist = (props) => {
    const userData = useContext(appContext).user.data
    const token = useContext(appContext).user.token
    const changeTrack = useContext(userContext).account.changeTrack
    const currentTrackID = useContext(userContext).account.state.track?.id

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

    function PlaylistItem(prop) {
        const track = prop.trackData

        const heartStyle = {
            stroke: 'red',
            fill: 'red',
        }

        const min = Math.floor(track.duration_in_seconds / 60)
        const sec = track.duration_in_seconds - min * 60
        const time = min + ':' + (sec > 10 ? sec : '0' + sec)

        const isItLike = false

        const useChangeLikeMutation = isItLike
            ? useDeleteLikeMutation
            : useAddLikeMutation
        const [
            changeLike,
            { data, error },
            // { data, isUninitialized, isLoading, isSuccess, isError, error },
        ] = useChangeLikeMutation()

        const changeLikeRequest = (requestData) => {
            console.log(requestData)
            changeLike(requestData)
        }

        let body = {}
        body.username = userData.username
        body.email = userData.email
        body.password = 'Gfhjkm3434'
        body['first_name'] = userData['first_name']
        body['last_name'] = userData['last_name']
        body.id = userData.id
        body.token = token.access

        let headers = { access: token.access }

        let requestData = {}
        requestData.trackID = track.id
        requestData.requestData = requestData
        requestData.headers = headers

        if (error) {
            console.log(error, data)
        }

        return (
            <div
                className={
                    `playlist__item ` +
                    (currentTrackID === track.id ? 'activeTrack' : '')
                }
            >
                <div className="playlist__track track">
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
                                    {track.release_date
                                        ? `  (${track.release_date})`
                                        : ''}
                                </span>
                            </a>
                        </div>
                    </div>

                    <div className="track__author">
                        <a className="track__author-link" href="#">
                            {track.author}
                        </a>
                    </div>

                    <div className="track__album">
                        <a className="track__album-link" href="#">
                            {track.album}
                        </a>
                    </div>

                    <div className="track__time">
                        <svg
                            className="track__time-svg"
                            alt="time"
                            style={isItLike ? heartStyle : {}}
                            onClick={() => {
                                changeLikeRequest(requestData)
                            }}
                        >
                            <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
                        </svg>
                        <span className="track__time-text">{time}</span>
                    </div>
                </div>
            </div>
        )
    }
}

const PlaylistPlug = () => {
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
