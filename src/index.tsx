import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './service-worker';


if('serviceWorker' in navigator){
    navigator.serviceWorker
    .register('service-worker.js')
    .then(registration => {
        console.log("Service Worker registered!");
    })
    .catch(error => {
        console.log("error registering service worker! Error is:", error);
    });
}

ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorker.register();
