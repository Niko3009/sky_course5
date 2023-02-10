import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { filterTodoList } from '../../store/slices/todo'
import { todoFilterSelector } from '../../store/selectors/todo'

import styles from './index.module.css'

export const FilterTodoList = () => {
    const dispatch = useDispatch()
    const filterState = useSelector(todoFilterSelector)

    const handleFilter = {
        byCompleteTodo: (event) => {
            dispatch(
                filterTodoList({
                    filterType: 'complete',
                    filterState: event.target.checked,
                })
            )
        },
        byIncompleteTodo: (event) => {
            dispatch(
                filterTodoList({
                    filterType: 'incomplete',
                    filterState: event.target.checked,
                })
            )
        },
    }

    return (
        <div className={styles.div}>
            <p>Filter:</p>
            <p>
                <input
                    type="checkbox"
                    name="complete"
                    onChange={handleFilter.byCompleteTodo}
                    checked={filterState.complete}
                />
                Complete
            </p>
            <p>
                <input
                    type="checkbox"
                    name="Incomplete"
                    onChange={handleFilter.byIncompleteTodo}
                    checked={filterState.incomplete}
                />
                Incomplete
            </p>
        </div>
    )
}
