const Filter = (props) => {
    const filterTypes = props.filterTypes
    const currentFilterType = props.currentFilterType
    const openedFilterList = props.openedFilterList

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
            filterList.push(
                <span onClick={() => props.setFilter(filterType, item)}>
                    {item}
                </span>
            )
            checkList.push(item)
        }
    })
    if (filterList.length === 0) {
        filterList.push(<h4>Нет данных</h4>)
    }

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
                currentFilterType={props.currentFilterType}
                openedFilterList={props.openedFilterList}
                selectFilter={props.selectFilter}
                filterTypes={props.filterTypes}
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
