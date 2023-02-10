import { useSelector } from 'react-redux'

import { todosSelector } from '../../store/selectors/todo'
import { todoFilterSelector } from '../../store/selectors/todo'

import { Todo } from '../todo/todo'

import styles from './index.module.css'

export const TodoList = () => {
    const filterState = useSelector(todoFilterSelector)
    const todos = useSelector(todosSelector)

    return (
        <ul className={styles.list}>
            {todos.map((todo) => {
                if (filterState.complete && todo.completed)
                    return <Todo key={todo.id} todo={todo} />

                if (filterState.incomplete && !todo.completed)
                    return <Todo key={todo.id} todo={todo} />

                return
            })}
        </ul>
    )
}
