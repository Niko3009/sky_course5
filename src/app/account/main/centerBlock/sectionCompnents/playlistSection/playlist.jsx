import { useContext } from 'react'
import { useSelector } from 'react-redux'

import { userContext } from 'app/account'
import { trackFromStore } from 'back/selectors/accountSelector'
import { useAddLikeMutation } from 'back/services/signApi'
import { useDelLikeMutation } from 'back/services/signApi'

import {
    TrackTitle,
    TrackAuthor,
    TrackAlbum,
    TrackTime,
} from './playlist/playlistComponents'

export const Playlist = ({ tracks }) => {
    let playlistItems = []
    Object.keys(tracks).forEach((key) => {
        const track = tracks[key]
        playlistItems.push(<PlaylistItem key={track.id} track={track} />)
    })

    if (!playlistItems.length)
        return (
            <div>
                <span className="track__author">Треков не найдено</span>
            </div>
        )

    return <div className="content__playlist playlist"> {playlistItems} </div>
}

const PlaylistItem = ({ track }) => {
    const currentTrackID = useSelector(trackFromStore)?.id
    const changeTrack = useContext(userContext).account.changeTrack
    const currentTrackCls = currentTrackID === track.id ? 'activeTrack' : ''

    const isItLike = track.like
    const useLikeMutation = isItLike ? useDelLikeMutation : useAddLikeMutation
    const [likeMutation] = useLikeMutation()

    const trackId = track.id
    const requestData = { trackId }
    const changeLike = () => likeMutation(requestData)

    return (
        <div className={`playlist__item ` + currentTrackCls}>
            <div className="playlist__track track">
                <TrackTitle track={track} changeTrack={changeTrack} />

                <TrackAuthor track={track} />

                <TrackAlbum track={track} />

                <TrackTime
                    track={track}
                    isItLike={isItLike}
                    changeLike={changeLike}
                />
            </div>
        </div>
    )
}
