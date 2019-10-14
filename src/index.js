//✔ React ;
import React from 'react';
import ReactDOM from 'react-dom';
//✔ Provider ;
import { Provider } from "react-redux";
//✔ Store ;
import { createStore } from "redux";
//✔ Redux Thunk ;
import thunk from "redux-thunk";
//✔ CSS ;
import './index.css';
//✔ Dashboard ;
import Dashboard from './dashboard/Dashboard';
//---------------------------------------------------------------------------------------------------------------------------
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><Dashboard /></Provider>, document.getElementById('root'));
