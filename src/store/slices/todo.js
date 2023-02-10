import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    filter: { complete: true, incomplete: true },
    allIds: [],
    byIds: {},
}

let nextTodoId = 0

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    // Поле `reducers` позволяет нам разметить все необходимые редьюсеры и сгенерировать необходимые связанные экшены
    reducers: {
        addTodo: (state, action) => {
            const id = ++nextTodoId

            // Redux Toolkit позволяет нам писать логику мутации состояния в reducers.
            // Под капотом, он не мутирует состояние напрямую, а использует библиотеку Immer, которая
            // обнаруживает изменения в «черновом состоянии» и создает новое неизменное состояние на основе этих изменений.
            state.allIds.push(id)

            state.byIds[id] = {
                content: action.payload,
                complete: false,
            }
        },

        deleteTodo: (state, { payload }) => {
            const id = payload.todo.id

            delete state.byIds[id]

            state.allIds.splice(state.allIds.indexOf(id), 1)
        },

        toggleCompleteness: (state, { payload }) => {
            const { id } = payload

            const targetTodo = state.byIds[id]

            targetTodo.completed = !targetTodo.completed
        },

        filterTodoList: (state, { payload }) => {
            const filterType = payload.filterType
            state.filter[filterType] = payload.filterState
        },
    },
})

export const { addTodo, deleteTodo, toggleCompleteness, filterTodoList } =
    todoSlice.actions

export default todoSlice.reducer
