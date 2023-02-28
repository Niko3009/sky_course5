export const FilterSection = ({
    tracks,
    filter,
    filterTypes,
    openFilterList,
    setFilter,
    sort,
    sortTypes,
    setSort,
}) => {
    return (
        <div>
            <Filter
                filter={filter}
                filterTypes={filterTypes}
                openFilterList={openFilterList}
                sort={sort}
                sortTypes={sortTypes}
                setSort={setSort}
            />
            {filter.typeList && (
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
    filterTypes,
    openFilterList,
    sort,
    sortTypes,
    setSort,
}) => {
    const currentFilterType = filter.type
    const currentFilterList = filter.typeList
    const currentSortType = sort.type
    const filters = filterTypes
    const sorts = sortTypes

    const filterBtnClass = (btnFilterType) =>
        `filter__button ` +
        (currentFilterType === btnFilterType ? 'filter__current' : '') +
        (currentFilterList === btnFilterType ? 'filter__selection' : '')

    const sortBtnClass = (btnSortType) =>
        `filter__button ` +
        (currentSortType === btnSortType ? 'filter__current' : '')

    return (
        <div className="centerblock__filter filter">
            <div className="filter__title">Искать по:</div>

            <div
                onClick={() => openFilterList(filters['author'])}
                className={filterBtnClass(filters['author'])}
            >
                исполнителю
            </div>

            <div
                onClick={() => openFilterList(filters['release_date'])}
                className={filterBtnClass(filters['release_date'])}
            >
                году выпуска
            </div>

            <div
                onClick={() => openFilterList(filters['genre'])}
                className={filterBtnClass(filters['genre'])}
            >
                жанру
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
    const filterType = filter.typeList

    let filterCriteria = filterType
    if (filterCriteria === 'release_date') filterCriteria = 'release_date'

    let list = []
    let checkList = []
    Object.keys(tracks).forEach((key) => {
        const track = tracks[key]
        const filterItem = track[filterCriteria]

        if (filterItem) {
            const FilterItem = () => {
                return (
                    <span onClick={() => setFilter(filterType, filterItem)}>
                        {filterItem}
                    </span>
                )
            }

            if (!checkList.includes(filterItem)) {
                list.push(<FilterItem key={filterItem} />)
                checkList.push(filterItem)
            }
        }
    })

    return (
        <div className={`filterBox filterBox_${filter.typeList}`}>
            {list.length ? <div>{list}</div> : <h4>Ничего не найдено</h4>}
        </div>
    )
}
