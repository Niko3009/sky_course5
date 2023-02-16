import { CenterBlockStyle as Style } from './centerBlock/centerBlockStyle'

import { useContext } from 'react'
import { appContext } from 'app'

import { Search } from './centerBlock/search'
import { AllTracks } from './centerBlock/allTracks'

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
        </Style>
    )
}
