import { useGetIndieChargeTracksQuery } from 'back/services/signApi'

import { PlaylistSection } from './sectionCompnents/playlistSection'

export const IndieCharge = () => {
    const {
        data: tracksData,
        isSuccess,
        isError,
    } = useGetIndieChargeTracksQuery()
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
