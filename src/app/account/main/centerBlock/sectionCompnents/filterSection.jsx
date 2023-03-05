import { useContext } from 'react'
import { appContext } from 'app'

import { FilterSectionStyle as Style } from './filterSection/filterSectionStyle'

export const FilterSection = ({
    tracks,
    // filter
    filter,
    filters,
    setFilter,
    openFilterList,
    clearFilters,
    //  sort
    sort,
    sorts,
    setSort,
    openSortList,
    clearSorts,
}) => {
    const appTheme = useContext(appContext).appTheme
    return (
        <Style data={appTheme.current}>
            <div className="filterWrapper">
                <div className="filter_buttons">
                    <Filter
                        // filter
                        filter={filter}
                        filters={filters}
                        openFilterList={openFilterList}
                        clearFilters={clearFilters}
                        //  sort
                        sort={sort}
                        sorts={sorts}
                        openSortList={openSortList}
                        clearSorts={clearSorts}
                    />
                </div>
                <div className="filter_boxes">
                    {filter.openedList && (
                        <FilterBox
                            tracks={tracks}
                            filter={filter}
                            setFilter={setFilter}
                        />
                    )}
                    {sort.openedList && (
                        <SortBox
                            tracks={tracks}
                            sort={sort}
                            setSort={setSort}
                        />
                    )}
                </div>
            </div>
        </Style>
    )
}

const Filter = ({
    // filter
    filter,
    filters,
    openFilterList,
    clearFilters,
    //  sort
    sort,
    sorts,
    openSortList,
    clearSorts,
}) => {
    const openedFilterList = filter.openedList
    const authorFiltersNum = filter['author'].length
    const dateFiltersNum = filter['release_date'].length
    const genreFiltersNum = filter['genre'].length

    const filterBtnClass = (btnFilterType) =>
        `filter__button ` +
        (openedFilterList === btnFilterType ? 'filter__current' : '')

    const sortBtnClass = (btnSortType) =>
        `filter__button ` + (sort === btnSortType ? 'filter__current' : '')

    const detectorStyle = (criteria) => {
        return { visibility: criteria ? 'visible' : 'hidden' }
    }

    return (
        <div className="centerblock__filter filter">
            <div className="filter__title">Искать по:</div>

            <div
                onClick={() => openFilterList(filters['author'])}
                className={filterBtnClass(filters['author'])}
            >
                <span> исполнителю </span>
                <div
                    className={'filterDetector'}
                    onClick={() => clearFilters('author')}
                    style={detectorStyle(authorFiltersNum)}
                >
                    <p>{authorFiltersNum}</p>
                </div>
            </div>

            <div
                onClick={() => openFilterList(filters['release_date'])}
                className={filterBtnClass(filters['release_date'])}
            >
                <span> году выпуска </span>
                <div
                    className={'filterDetector'}
                    onClick={() => clearFilters('release_date')}
                    style={detectorStyle(dateFiltersNum)}
                >
                    <p>{dateFiltersNum}</p>
                </div>
            </div>

            <div
                onClick={() => openFilterList(filters['genre'])}
                className={filterBtnClass(filters['genre'])}
            >
                <span> жанру </span>
                <div
                    className={'filterDetector'}
                    onClick={() => clearFilters('genre')}
                    style={detectorStyle(genreFiltersNum)}
                >
                    <p>{genreFiltersNum}</p>
                </div>
            </div>

            <div className="sort__title">Сортировать по:</div>

            <div
                onClick={() => openSortList(sorts['release_date'])}
                className={sortBtnClass(sorts['release_date'])}
            >
                <span> году выпуска </span>
                <div
                    className={'filterDetector'}
                    onClick={() => clearSorts('release_date')}
                    style={detectorStyle(sort.type === 'release_date')}
                >
                    <p>{sort.forwardDirection ? '🠉' : '🠋'}</p>
                </div>
            </div>
        </div>
    )
}

const FilterBox = ({ tracks, filter, setFilter }) => {
    const filterCriteria = filter.openedList
    const activeFilterItems = filter[filterCriteria]
        ? filter[filterCriteria]
        : []

    let list = []
    let checkList = []
    Object.keys(tracks).forEach((key) => {
        const filterItem = tracks[key][filterCriteria]
        if (filterItem) {
            if (!checkList.includes(filterItem))
                list.push(
                    <FilterItem
                        key={filterItem}
                        filterItem={filterItem}
                        activeFilterItems={activeFilterItems}
                        setFilter={setFilter}
                    />
                )
            checkList.push(filterItem)
        }
    })

    return (
        <div className={`filterBox filterBox_${filter.openedList}`}>
            {list.length ? <div>{list}</div> : <h4>Ничего не найдено</h4>}
        </div>
    )
}
const FilterItem = ({ filterItem, activeFilterItems, setFilter }) => {
    return (
        <span
            onClick={() => setFilter(filterItem)}
            className={`filterItem${
                activeFilterItems.includes(filterItem) ? '_active' : ''
            }`}
        >
            {filterItem}
        </span>
    )
}

const SortBox = ({ sort, setSort }) => {
    let list = []
    list.push(
        <SortItem
            key={1}
            sort={sort}
            setSort={setSort}
            direction={'По возрастанию'}
        />
    )
    list.push(
        <SortItem
            key={2}
            sort={sort}
            setSort={setSort}
            direction={'По убыванию'}
        />
    )

    return (
        <div className={`sortBox sortBox_${sort.openedList}`}>
            <div>{list}</div>
        </div>
    )
}
const SortItem = ({ sort, setSort, direction }) => {
    const forwardDirection = direction === 'По возрастанию'
    const active =
        sort.openedList === sort.type &&
        sort.forwardDirection === forwardDirection

    return (
        <span
            onClick={() => setSort(forwardDirection)}
            className={`sortItem${active ? '_active' : ''}`}
        >
            {direction}
        </span>
    )
}
