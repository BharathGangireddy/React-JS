import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
const createroot = ReactDOM.createRoot(rootElement);
//.render(/* new App().render() */) // Calling by using JS.


createroot.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>

    <BrowserRouter>
        <App />
    </BrowserRouter>
);