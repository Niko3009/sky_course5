import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'

import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import { store } from './back/store'

import App from './app'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

reportWebVitals()
