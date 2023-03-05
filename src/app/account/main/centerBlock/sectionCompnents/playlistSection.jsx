import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { Playlist } from './playlistSection/playlist'
import { PlaylistPlug } from './playlistSection/playlistPlug'

import { setTrackList } from 'back/slices/accountSlice'
import { useGetAllFavorsQuery } from 'back/services/signApi'

export const PlaylistSection = ({
    tracksIsResponse,
    tracks = [],
    searchValue = '',
    filter = {
        author: [],
        genre: [],
        release_date: [],
    },
    sort = {
        type: null,
        forwardDirection: true,
    },
}) => {
    const dispatch = useDispatch()

    tracks = tracks ? JSON.parse(JSON.stringify(tracks)) : {}

    const { data: favorsData, isSuccess, isError } = useGetAllFavorsQuery()
    const favorsIsResponse = isSuccess || isError
    let favors = favorsData ? JSON.parse(JSON.stringify(favorsData)) : {}
    // const favors = structuredClone(favorsData)

    const isResponse = favorsIsResponse && tracksIsResponse

    if (isResponse) {
        if (searchValue) tracks = recyclebySearch(searchValue, tracks)
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
    const k = sort.forwardDirection ? 1 : -1

    if (sort?.type === 'release_date') sortByDate(tracks)

    return tracks

    function sortByDate(tracks) {
        tracks.sort(function (a, b) {
            let msA = new Date(a.release_date).getTime()
            let msB = new Date(b.release_date).getTime()
            if (msA === 0) msA = -(10 ** 20)
            if (msB === 0) msB = -(10 ** 20)
            return msA > msB ? k : -k
        })
    }
}

const filterTracks = (filter, tracks) => {
    const filtersSummary =
        filter['author'].length +
        filter['genre'].length +
        filter['release_date'].length
    if (!filtersSummary) return tracks

    const makeFilter = (array, criteria) => {
        const filterItems = filter[criteria]
        if (filterItems.length < 1) return array

        let newArray = []
        Object.keys(array).forEach((N) => {
            const track = array[N]
            if (
                filterItems.includes(track[criteria]) &&
                !newArray.includes(track)
            )
                newArray.push(track)
        })
        return newArray
    }

    let filteredTrackList = tracks ? JSON.parse(JSON.stringify(tracks)) : []
    filteredTrackList = makeFilter(filteredTrackList, 'author')
    filteredTrackList = makeFilter(filteredTrackList, 'genre')
    filteredTrackList = makeFilter(filteredTrackList, 'release_date')

    return filteredTrackList
}

const markFavors = (favors, tracks) => {
    let favorsIds = []
    const isFavorite = (track) => favorsIds.includes(track.id)
    Object.keys(favors).forEach((N) => favorsIds.push(favors[N].id))
    Object.keys(tracks).forEach((N) => (tracks[N].like = isFavorite(tracks[N])))
    return tracks
}

const recyclebySearch = (searchValue, tracks) => {
    let goodNames = []
    Object.keys(tracks).forEach((N) => {
        if (
            tracks[N].name.toLowerCase().includes(searchValue.toLowerCase()) &&
            !goodNames.includes(tracks[N].name)
        )
            goodNames.push(tracks[N].name)
    })

    goodNames.sort(function (a, b) {
        if (a < b) return -1
        if (a > b) return 1
        return 0
    })

    let newTracks = {}
    let num = 0
    for (let name of goodNames)
        Object.keys(tracks).forEach((N) => {
            if (tracks[N].name === name) newTracks[num++] = tracks[N]
        })

    return newTracks
}
