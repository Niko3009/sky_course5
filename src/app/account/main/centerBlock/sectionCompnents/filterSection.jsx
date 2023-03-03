export const FilterSection = ({
    tracks,
    filter,
    filters,
    openFilterList,
    setFilter,
    clearFilters,
    sort,
    sorts,
    setSort,
}) => {
    return (
        <div>
            <Filter
                filter={filter}
                filters={filters}
                openFilterList={openFilterList}
                clearFilters={clearFilters}
                sort={sort}
                sorts={sorts}
                setSort={setSort}
            />
            {filter.openedList && (
                <FilterBox
                    tracks={tracks}
                    filter={filter}
                    setFilter={setFilter}
                />
            )}
        </div>
    )
}

const Filter = ({
    filter,
    filters,
    openFilterList,
    clearFilters,
    sort,
    sorts,
    setSort,
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

    return (
        <div className="centerblock__filter filter">
            <div className="filter__title">Искать по:</div>

            <div
                onClick={() => openFilterList(filters['author'])}
                className={filterBtnClass(filters['author'])}
            >
                исполнителю
                {Boolean(authorFiltersNum) && (
                    <div
                        className={'filterDetector'}
                        onClick={() => clearFilters('author')}
                    >
                        <p>{authorFiltersNum}</p>
                    </div>
                )}
            </div>

            <div
                onClick={() => openFilterList(filters['release_date'])}
                className={filterBtnClass(filters['release_date'])}
            >
                году выпуска
                {Boolean(dateFiltersNum) && (
                    <div
                        className={'filterDetector'}
                        onClick={() => clearFilters('release_date')}
                    >
                        <p>{dateFiltersNum}</p>
                    </div>
                )}
            </div>

            <div
                onClick={() => openFilterList(filters['genre'])}
                className={filterBtnClass(filters['genre'])}
            >
                жанру
                {Boolean(genreFiltersNum) && (
                    <div
                        className={'filterDetector'}
                        onClick={() => clearFilters('genre')}
                    >
                        <p>{genreFiltersNum}</p>
                    </div>
                )}
            </div>

            <div className="filter__title">Сортировать по:</div>

            <div
                onClick={() => setSort(sorts['release_date'])}
                className={sortBtnClass(sorts['release_date'])}
            >
                году выпуска
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
