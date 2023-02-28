import { CenterBlockStyle as Style } from './centerBlock/centerBlockStyle'

import { useContext } from 'react'
import { appContext } from 'app'

import { Search } from './centerBlock/search'
import { AllTracks } from './centerBlock/allTracks'
import { MyPlaylist } from './centerBlock/myPlaylist'
import { PlaylistOfDay } from './centerBlock/playlistOfDay'
import { DanceHits } from './centerBlock/danceHits'
import { IndieCharge } from './centerBlock/indieCharge'

export const CenterBlock = ({ mode }) => {
    const appTheme = useContext(appContext).appTheme

    const titles = {
        'my-playlist': 'Мой плейлист',
        'playlist-of-day': 'Плейлист дня',
        'dance-hits': '100 танцевальных хитов',
        'indie-charge': 'Инди заряд',
    }

    return (
        <Style data={appTheme.current}>
            <Search />
            <h2 className="centerblock__h2">
                {titles[mode] ? titles[mode] : 'Треки'}
            </h2>

            {mode === null && <AllTracks />}
            {mode === 'my-playlist' && <MyPlaylist />}
            {mode === 'playlist-of-day' && <PlaylistOfDay />}
            {mode === 'dance-hits' && <DanceHits />}
            {mode === 'indie-charge' && <IndieCharge />}
        </Style>
    )
}
