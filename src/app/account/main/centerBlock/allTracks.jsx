import { useState } from 'react'

import { useGetAllTracksQuery } from 'back/services/signApi'

import { PlaylistSection } from './sectionCompnents/playlistSection'
import { FilterSection } from './sectionCompnents/filterSection'

export const AllTracks = ({ searchValue }) => {
    const { data, isSuccess, isError } = useGetAllTracksQuery()
    const tracksIsResponse = isSuccess || isError
    let tracks = data ? JSON.parse(JSON.stringify(data)) : {}

    const initState = {
        filter: {
            openedList: null,
            author: [],
            genre: [],
            release_date: [],
        },
        sort: {
            openedList: null,
            type: null,
            forwardDirection: true,
        },
    }

    const [status, setStatus] = useState(initState)
    const newStatus = JSON.parse(JSON.stringify(status))
    const newFilter = newStatus.filter
    const newSort = newStatus.sort
    const filter = status.filter
    const sort = status.sort

    // filter
    let filters = { author: 'author', genre: 'genre' }
    filters['release_date'] = 'release_date'
    const openFilterList = function (selectedType) {
        newFilter.openedList =
            selectedType === filter.openedList ? null : selectedType
        newSort.openedList = null
        setStatus(newStatus)
    }
    const setFilter = function (selectedItem) {
        const index = newFilter[filter.openedList].indexOf(selectedItem)
        if (index < 0) newFilter[filter.openedList].push(selectedItem)
        else newFilter[filter.openedList].splice(index, 1)
        setStatus(newStatus)
    }
    const clearFilters = function (selectedType) {
        newFilter[selectedType] = []
        setStatus(newStatus)
    }

    // sort
    let sorts = { release_date: 'release_date' }
    const openSortList = function (selectedType) {
        newSort.openedList =
            selectedType === sort.openedList ? null : selectedType
        newFilter.openedList = null
        setStatus(newStatus)
    }
    const setSort = function (selectedForwardDirection) {
        const selectedType = sort.openedList
        const isClickOnActiveSort =
            sort.type === selectedType &&
            sort.forwardDirection === selectedForwardDirection
        if (isClickOnActiveSort) newSort.type = null
        else {
            newSort.type = selectedType
            newSort.forwardDirection = selectedForwardDirection
        }
        setStatus(newStatus)
    }
    const clearSorts = function () {
        newSort.type = null
        newSort.forwardDirection = true
        setStatus(newStatus)
    }

    if (!isError)
        return (
            <div>
                <FilterSection
                    tracks={tracks}
                    // filter
                    filter={filter}
                    filters={filters}
                    setFilter={setFilter}
                    openFilterList={openFilterList}
                    clearFilters={clearFilters}
                    //  sort
                    sort={sort}
                    sorts={sorts}
                    setSort={setSort}
                    openSortList={openSortList}
                    clearSorts={clearSorts}
                />

                <PlaylistSection
                    tracksIsResponse={tracksIsResponse}
                    tracks={tracks}
                    searchValue={searchValue}
                    filter={filter}
                    sort={sort}
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
