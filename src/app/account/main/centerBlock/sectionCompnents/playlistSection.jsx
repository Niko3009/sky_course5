import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { Playlist } from './playlistSection/playlist'
import { PlaylistPlug } from './playlistSection/playlistPlug'

import { setTrackList } from 'back/slices/accountSlice'
import { useGetAllFavorsQuery } from 'back/services/signApi'

export const PlaylistSection = ({
    tracksIsResponse,
    tracks = [],
    filter = null,
    sort = null,
}) => {
    const dispatch = useDispatch()

    const { data: favorsData, isSuccess, isError } = useGetAllFavorsQuery()
    const favorsIsResponse = isSuccess || isError
    const favors = structuredClone(favorsData)

    const isResponse = favorsIsResponse && tracksIsResponse

    if (isResponse) {
        tracks = filterTracks(filter, tracks)
        tracks = sortTracks(sort, tracks)
        tracks = markFavors(favors, tracks)
    }

    useEffect(() => {
        if (isResponse) dispatch(setTrackList({ tracks }))
    })

    return (
        <div className="centerblock__content">
            <PlaylistTitle />
            {isResponse && <Playlist tracks={tracks} />}
            {!isResponse && <PlaylistPlug />}
        </div>
    )
}

const PlaylistTitle = () => {
    const columnCls = (N) => `playlist-title__col col0${N}`
    return (
        <div className="content__title playlist-title">
            <div className={columnCls(1)}>Трек</div>
            <div className={columnCls(2)}>ИСПОЛНИТЕЛЬ</div>
            <div className={columnCls(3)}>АЛЬБОМ</div>
            <div className={columnCls(4)}>
                <svg className="playlist-title__svg" alt="time">
                    <use xlinkHref="/img/icon/sprite.svg#icon-watch"></use>
                </svg>
            </div>
        </div>
    )
}

const sortTracks = (sort, tracks) => {
    const sortType = sort?.type
    if (sortType === 'release_date') sortByDate(tracks)
    return tracks

    function sortByDate(tracks) {
        tracks.sort(function (a, b) {
            let msA = new Date(a.release_date).getTime()
            let msB = new Date(b.release_date).getTime()
            if (msA === 0) msA = -(10 ** 20)
            if (msB === 0) msB = -(10 ** 20)
            return msA < msB ? 1 : -1
        })
    }
}

const filterTracks = (filter, tracks) => {
    const filterType = filter?.type
    const filterItem = filter?.item

    if (!filterItem) return tracks

    let filteredTrackList = []
    Object.keys(tracks).forEach((key) => {
        const track = tracks[key]
        if (track[filterType] === filterItem) filteredTrackList.push(track)
    })

    return filteredTrackList
}

const markFavors = (favors, tracks) => {
    tracks = structuredClone(tracks)

    let favorsIds = []
    const isFavorite = (track) => favorsIds.includes(track.id)
    Object.keys(favors).forEach((N) => favorsIds.push(favors[N].id))
    Object.keys(tracks).forEach((N) => (tracks[N].like = isFavorite(tracks[N])))
    return tracks
}
