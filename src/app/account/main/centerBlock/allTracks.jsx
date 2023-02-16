import { useState } from 'react'

import { FilterSection } from './filterSection'
import { PlaylistSection } from './playlistSection'

import { useGetAllTracksQuery } from 'back/services/signApi'

export const AllTracks = () => {
    const { data, isSuccess, isError, error } = useGetAllTracksQuery()
    let tracks = []
    if (data)
        data.forEach((element) => {
            tracks.push(element)
        })

    const dataHasArrived = isSuccess || isError
    const requestData = { dataHasArrived, isSuccess, isError, error }

    const [status, setStatus] = useState({
        openedFilterList: null,
        filter: { filterType: null, filterItem: null },
        sort: { sortType: null },
    })
    const changeStatus = function (newStatus) {
        setStatus({
            openedFilterList: newStatus.openedFilterList,
            filter: newStatus.filter,
            sort: newStatus.sort,
        })
    }

    const filterTypes = [null, 'author', 'release_date', 'genre']
    const selectFilter = function (selectedFilterType) {
        if (selectedFilterType === status.filter.filterType) {
            status.openedFilterList = null
            status.filter.filterType = null
            status.filter.filterItem = null
        } else {
            status.openedFilterList =
                selectedFilterType !== status.openedFilterList
                    ? selectedFilterType
                    : null
        }
        changeStatus(status)
    }
    const setFilter = function (newFilterType, newFilterItem) {
        status.openedFilterList = null
        status.filter.filterType = newFilterType
        status.filter.filterItem = newFilterItem
        changeStatus(status)
    }

    const sortTypes = [null, 'release_date']
    const selectSorting = function (selectedSortType) {
        if (selectedSortType === status.sort.sortType) {
            status.sort.sortType = null
        } else {
            status.sort.sortType = selectedSortType
        }
        changeStatus(status)
    }

    return (
        <div>
            <FilterSection
                tracks={tracks}
                filterTypes={filterTypes}
                filter={status.filter}
                openedFilterList={status.openedFilterList}
                selectFilter={selectFilter}
                setFilter={setFilter}
                sortTypes={sortTypes}
                sort={status.sort}
                selectSorting={selectSorting}
            />

            <PlaylistSection
                tracks={tracks}
                filter={status.filter}
                sort={status.sort}
                requestData={requestData}
            />
        </div>
    )
}
