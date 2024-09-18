import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { RouterProvider } from 'react-router-dom'
import { myrouter } from './Routing.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <RouterProvider router={myrouter}/>
    </Provider>,
)
