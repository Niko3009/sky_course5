import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../../store/slices/todo'

import styles from './index.module.css'

export const DeleteTodoBtn = (todo) => {
    const dispatch = useDispatch()

    const handleDeleteTodo = () => {
        dispatch(deleteTodo(todo))
        console.log(todo)
    }

    return (
        <span className={styles.addButton} onClick={handleDeleteTodo}>
            {'❌'}
        </span>
    )
}
