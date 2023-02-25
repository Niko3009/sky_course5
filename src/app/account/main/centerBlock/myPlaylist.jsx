import { useGetAllFavorsQuery } from 'back/services/signApi'

import { PlaylistSection } from './sectionCompnents/playlistSection'

export const MyPlaylist = () => {
    const { data: tracksData, isSuccess, isError } = useGetAllFavorsQuery()
    const tracksIsResponse = isSuccess || isError
    const tracks = structuredClone(tracksData)

    return (
        <div>
            <PlaylistSection
                tracksIsResponse={tracksIsResponse}
                tracks={tracks}
            />
        </div>
    )
}
