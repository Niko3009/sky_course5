import { useGetDanceHitsTracksQuery } from 'back/services/signApi'

import { PlaylistSection } from './sectionCompnents/playlistSection'

export const DanceHits = ({ searchValue }) => {
    const query = useGetDanceHitsTracksQuery
    const { data, isSuccess, isError } = query()
    const tracksIsResponse = isSuccess || isError
    let tracks = data ? JSON.parse(JSON.stringify(data?.items)) : {}
    // const tracks = structuredClone(data)?.items

    if (!isError)
        return (
            <div>
                <PlaylistSection
                    searchValue={searchValue}
                    tracksIsResponse={tracksIsResponse}
                    tracks={tracks}
                />
            </div>
        )
    else
        return (
            <div>
                <p>Произоша ошибка при загрузке</p>
            </div>
        )
}
