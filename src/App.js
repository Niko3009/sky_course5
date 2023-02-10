import React from 'react'
import { TodoList } from './components/todo-list/todo-list'
import { FilterTodoList } from './components/filterTodoList/filterTodoList'
import { AddTodo } from './components/add-todo/add-todo'
import './App.css'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <FilterTodoList />
                <AddTodo />
                <TodoList />
            </header>
        </div>
    )
}

export default App
