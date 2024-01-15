import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Toaster
        position="top-centre"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
          style: {
            background: 'white',
            color: 'red',
            marginTop: '70px'
          },

          // Default options for specific types
          success: {
            duration: 5000,
            theme: {
              primary: 'green',
              secondary: 'black',
              background: 'green',
              color: 'white'
            },
            style :{
              marginBottom: '30px',
              padding: '20px 20px',
              fontSize : '15px',
              fontWeight : '600',
              border : '2px solid green'
            },
            position : 'bottom-right'
          },
        }}
      />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
