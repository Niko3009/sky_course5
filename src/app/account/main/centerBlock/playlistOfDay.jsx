import { useGetPlaylistOfDayTracksQuery } from 'back/services/signApi'

import { PlaylistSection } from './sectionCompnents/playlistSection'

export const PlaylistOfDay = () => {
    const {
        data: tracksData,
        isSuccess,
        isError,
    } = useGetPlaylistOfDayTracksQuery()
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
