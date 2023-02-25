import { useGetDanceHitsTracksQuery } from 'back/services/signApi'

import { PlaylistSection } from './sectionCompnents/playlistSection'

export const DanceHits = () => {
    const {
        data: tracksData,
        isSuccess,
        isError,
    } = useGetDanceHitsTracksQuery()
    const tracksIsResponse = isSuccess || isError
    const tracks = structuredClone(tracksData)?.items

    return (
        <div>
            <PlaylistSection
                tracksIsResponse={tracksIsResponse}
                tracks={tracks}
            />
        </div>
    )
}
