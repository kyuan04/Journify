import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDWZFMR8oNCPNxYDnhf6fzxcDy1_tSp_Xc",
    authDomain: "journify-78e8d.firebaseapp.com",
    projectId: "journify-78e8d",
    storageBucket: "journify-78e8d.appspot.com",
    messagingSenderId: "793476038642",
    appId: "1:793476038642:web:64411a98ef2c679db8b56b",
    measurementId: "G-FSSDR0LWYH"
};

const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export { app };

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
