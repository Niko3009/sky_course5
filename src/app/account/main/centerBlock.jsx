import { CenterBlockStyle as Style } from './centerBlock/centerBlockStyle'

import React from 'react'
const { useState } = React

import { FilterSection } from './centerBlock/filterSection'
import { PlaylistSection } from './centerBlock/playlistSection'
import { Search } from './centerBlock/search'

import tracks from './data/tracks'

export const CenterBlock = (props) => {
    const [status, setStatus] = useState({
        openedFilterList: null,
        filter: { filterType: null, filterItem: null },
        isTrackListLoaded: false,
    })
    const statusObj = status
    const changeStatus = function (newStatus) {
        setStatus({
            openedFilterList: newStatus.openedFilterList,
            filter: newStatus.filter,
            isTrackListLoaded: newStatus.isTrackListLoaded,
        })
    }

    const filterTypes = [null, 'author', 'release', 'genre']

    const selectFilter = function (selectedFilterType) {
        if (selectedFilterType === status.filter.filterType) {
            statusObj.openedFilterList = null
            statusObj.filter.filterType = null
            statusObj.filter.filterItem = null
            statusObj.isTrackListLoaded = false
        } else {
            statusObj.openedFilterList =
                selectedFilterType !== status.openedFilterList
                    ? selectedFilterType
                    : null
        }
        changeStatus(statusObj)
    }
    const setFilter = function (newFilterType, newFilterItem) {
        statusObj.openedFilterList = null
        statusObj.filter.filterType = newFilterType
        statusObj.filter.filterItem = newFilterItem
        statusObj.isTrackListLoaded = false
        changeStatus(statusObj)
    }
    const loadTrackList = function () {
        statusObj.isTrackListLoaded = true
        changeStatus(statusObj)
    }

    return (
        <Style>
            <Search />

            <SectionTitle section={props.section} />

            {props.section === 'AllTracks' && (
                <FilterSection
                    currentFilterType={status.filter.filterType}
                    selectFilter={selectFilter}
                    filterTypes={filterTypes}
                    openedFilterList={status.openedFilterList}
                    setFilter={setFilter}
                    tracks={tracks}
                />
            )}

            <PlaylistSection
                tracks={tracks}
                filter={status.filter}
                loadTrackList={loadTrackList}
                isTrackListLoaded={status.isTrackListLoaded}
            />
        </Style>
    )
}

const SectionTitle = (props) => {
    const section = props.section
    let title

    switch (section) {
        case 'AllTracks':
            title = 'Треки'
            break

        case 'MyPlaylist':
            title = 'Мой плейлист'
            break

        case 'PlaylistOfDay':
            title = 'Плейлист для'
            break

        case 'DanceHits':
            title = '100 танцевальных хитов'
            break

        case 'IndieСharge':
            title = 'Инди заряд'
            break

        default:
            break
    }

    return <h2 className="centerblock__h2">{title}</h2>
}
