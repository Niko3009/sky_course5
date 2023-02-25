import { useState } from 'react'

import { useGetAllTracksQuery } from 'back/services/signApi'

import { PlaylistSection } from './sectionCompnents/playlistSection'
import { FilterSection } from './sectionCompnents/filterSection'

export const AllTracks = () => {
    const { data: tracksData, isSuccess, isError } = useGetAllTracksQuery()
    const tracksIsResponse = isSuccess || isError
    const tracks = structuredClone(tracksData)

    const initSort = { type: null }
    const initFilter = { typeList: null, type: null, item: null }
    const initState = { sort: initSort, filter: initFilter }
    const [status, setStatus] = useState(initState)
    const newStatus = structuredClone(status)
    const filter = status.filter
    const sort = status.sort

    // filter
    let filterTypes = { author: 'author', genre: 'genre' }
    filterTypes['release_date'] = 'release_date'
    const openFilterList = function (selectedType) {
        const newFilter = newStatus.filter
        const filterListIsOpen = selectedType === filter.typeList
        const filterTypeIsOn = selectedType === filter.type
        if (filterTypeIsOn) newStatus.filter = initFilter
        else newFilter.typeList = filterListIsOpen ? null : selectedType
        setStatus(newStatus)
    }
    const setFilter = function (selectedType, selectedItem) {
        const newFilter = newStatus.filter
        newFilter.type = selectedType
        newFilter.item = selectedItem
        newFilter.typeList = null
        setStatus(newStatus)
    }

    // sort
    let sortTypes = {}
    sortTypes['release_date'] = 'release_date'
    const setSort = function (selectedType) {
        const newSort = newStatus.sort
        newSort.type = selectedType === sort.type ? null : selectedType
        setStatus(newStatus)
    }

    return (
        <div>
            <FilterSection
                tracks={tracks}
                // filter
                filter={filter}
                filterTypes={filterTypes}
                openFilterList={openFilterList}
                setFilter={setFilter}
                //  sort
                sort={sort}
                sortTypes={sortTypes}
                setSort={setSort}
            />

            <PlaylistSection
                tracksIsResponse={tracksIsResponse}
                tracks={tracks}
                filter={filter}
                sort={sort}
            />
        </div>
    )
}
