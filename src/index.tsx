import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import 'normalize.css';
import './styles/index.scss';

const rootElem = document.getElementById('root');

if (rootElem) {
  const root = ReactDOM.createRoot(rootElem);
  root.render(
    <React.StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
    </React.StrictMode>
  );
}


