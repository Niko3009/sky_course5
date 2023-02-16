const Filter = (props) => {
    const filterTypes = props.filterTypes
    const currentFilterType = props.filter.filterType
    const openedFilterList = props.openedFilterList

    const sortTypes = props.sortTypes
    const currentSortType = props.sort.sortType

    return (
        <div className="centerblock__filter filter">
            <div className="filter__title">Искать по:</div>
            <div
                onClick={() => props.selectFilter(filterTypes[1])}
                className={
                    'filter__button button-author ' +
                    (currentFilterType === filterTypes[1]
                        ? 'filter__current'
                        : '') +
                    (openedFilterList === filterTypes[1]
                        ? 'filter__selection'
                        : '')
                }
            >
                исполнителю
            </div>
            <div
                onClick={() => props.selectFilter(filterTypes[2])}
                className={
                    'filter__button button-year ' +
                    (currentFilterType === filterTypes[2]
                        ? 'filter__current'
                        : '') +
                    (openedFilterList === filterTypes[2]
                        ? 'filter__selection'
                        : '')
                }
            >
                году выпуска
            </div>
            <div
                onClick={() => props.selectFilter(filterTypes[3])}
                className={
                    'filter__button button-genre ' +
                    (currentFilterType === filterTypes[3]
                        ? 'filter__current'
                        : '') +
                    (openedFilterList === filterTypes[3]
                        ? 'filter__selection'
                        : '')
                }
            >
                жанру
            </div>

            <div className="filter__title"> Сортировать по:</div>
            <div
                onClick={() => props.selectSorting(sortTypes[1])}
                className={
                    'filter__button button-year ' +
                    (currentSortType === sortTypes[1] ? 'filter__current' : '')
                }
            >
                году выпуска
            </div>
        </div>
    )
}

const FilterListBox = (props) => {
    const filterType = props.openedFilterList
    const tracks = props.tracks

    let filterList = []
    let checkList = []
    Object.keys(tracks).forEach((key) => {
        const item = tracks[key][filterType]
        if (item !== undefined && !checkList.includes(item)) {
            const FilterItem = function () {
                return (
                    <span onClick={() => props.setFilter(filterType, item)}>
                        {item}
                    </span>
                )
            }

            filterList.push(<FilterItem key={key} item={item} />)
            checkList.push(item)
        }
    })

    if (filterList.length === 0) {
        return (
            <div className={`filterListBox filterListBox_${filterType}`}>
                <h4>Нет данных</h4>
            </div>
        )
    } else
        return (
            <div className={`filterListBox filterListBox_${filterType}`}>
                <div>{filterList}</div>
            </div>
        )
}

export const FilterSection = (props) => {
    return (
        <div>
            <Filter
                filterTypes={props.filterTypes}
                filter={props.filter}
                openedFilterList={props.openedFilterList}
                selectFilter={props.selectFilter}
                sortTypes={props.sortTypes}
                sort={props.sort}
                selectSorting={props.selectSorting}
            />
            {props.openedFilterList !== null && (
                <FilterListBox
                    openedFilterList={props.openedFilterList}
                    setFilter={props.setFilter}
                    tracks={props.tracks}
                />
            )}
        </div>
    )
}
