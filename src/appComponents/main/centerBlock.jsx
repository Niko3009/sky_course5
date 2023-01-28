import React from 'react'
const { useState } = React

import tracks from './data/tracks'
import { FilterSection } from './centerBlock/filterSection'
import { PlaylistSection } from './centerBlock/playlistSection'

const Search = () => {
    return (
        <div className="centerblock__search search">
            <svg className="search__svg">
                <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
            </svg>
            <input
                className="search__text"
                type="search"
                placeholder="Поиск"
                name="search"
            />
        </div>
    )
}

export const CenterBlock = () => {
    const filterTypes = [null, 'author', 'release', 'genre']

    const [status, setStatus] = useState({
        openedFilterList: null,
        filter: { filterType: null, filterItem: null },
        isTrackListLoaded: false,
    })

    const newStatus = status
    function changeStatus(newStatus) {
        setStatus({
            openedFilterList: newStatus.openedFilterList,
            filter: newStatus.filter,
            isTrackListLoaded: newStatus.isTrackListLoaded,
        })
    }

    const selectFilter = function (selectedFilterType) {
        if (selectedFilterType === status.filter.filterType) {
            newStatus.openedFilterList = null
            newStatus.filter.filterType = null
            newStatus.filter.filterItem = null
            newStatus.isTrackListLoaded = false
        } else {
            newStatus.openedFilterList =
                selectedFilterType !== status.openedFilterList
                    ? selectedFilterType
                    : null
        }
        changeStatus(newStatus)
    }
    const setFilter = function (newFilterType, newFilterItem) {
        newStatus.openedFilterList = null
        newStatus.filter.filterType = newFilterType
        newStatus.filter.filterItem = newFilterItem
        newStatus.isTrackListLoaded = false
        changeStatus(newStatus)
    }
    const loadTrackList = function () {
        newStatus.isTrackListLoaded = true
        changeStatus(newStatus)
    }

    return (
        <div className="main__centerblock centerblock">
            <Search />

            <h2 className="centerblock__h2">Треки</h2>

            <FilterSection
                currentFilterType={status.filter.filterType}
                selectFilter={selectFilter}
                filterTypes={filterTypes}
                openedFilterList={status.openedFilterList}
                setFilter={setFilter}
                tracks={tracks}
            />

            <PlaylistSection
                tracks={tracks}
                filter={status.filter}
                loadTrackList={loadTrackList}
                isTrackListLoaded={status.isTrackListLoaded}
            />
        </div>
    )
}
