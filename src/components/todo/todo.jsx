import React from 'react'
import { useDispatch } from 'react-redux'
import cx from 'classnames'
import { DeleteTodoBtn } from '../delete-todo/delete-todo'

import { toggleCompleteness } from '../../store/slices/todo'

import styles from './index.module.css'

export const Todo = ({ todo }) => {
    const dispatch = useDispatch()

    const toggleTodoItem = () => {
        dispatch(toggleCompleteness({ id: todo.id }))
    }

    return (
        <li className={styles.item}>
            {todo.completed ? '👌' : '👋'}{' '}
            <span
                className={cx({
                    [styles.completed]: todo.completed,
                })}
                onClick={toggleTodoItem}
            >
                {todo.content}
            </span>
            <DeleteTodoBtn todo={todo} />
        </li>
    )
}
