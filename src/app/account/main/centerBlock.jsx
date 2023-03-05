import React, { useState, useContext } from 'react'

import { appContext } from 'app'

import { Search } from './centerBlock/search'
import { AllTracks } from './centerBlock/allTracks'
import { MyPlaylist } from './centerBlock/myPlaylist'
import { PlaylistOfDay } from './centerBlock/playlistOfDay'
import { DanceHits } from './centerBlock/danceHits'
import { IndieCharge } from './centerBlock/indieCharge'

import { CenterBlockStyle as Style } from './centerBlock/centerBlockStyle'

export const CenterBlock = ({ mode }) => {
    const appTheme = useContext(appContext).appTheme

    const [searchValue, setSearchValue] = useState('')

    const titles = {
        'my-playlist': 'Мой плейлист',
        'playlist-of-day': 'Плейлист дня',
        'dance-hits': '100 танцевальных хитов',
        'indie-charge': 'Инди заряд',
    }

    return (
        <Style data={appTheme.current}>
            <Search setSearchValue={setSearchValue} />

            <h2 className="centerblock__h2">
                {titles[mode] ? titles[mode] : 'Треки'}
            </h2>

            <div className="centerPlaylist">
                {mode === null && <AllTracks searchValue={searchValue} />}
                {mode === 'my-playlist' && (
                    <MyPlaylist searchValue={searchValue} />
                )}
                {mode === 'playlist-of-day' && (
                    <PlaylistOfDay searchValue={searchValue} />
                )}
                {mode === 'dance-hits' && (
                    <DanceHits searchValue={searchValue} />
                )}
                {mode === 'indie-charge' && (
                    <IndieCharge searchValue={searchValue} />
                )}
            </div>
        </Style>
    )
}
