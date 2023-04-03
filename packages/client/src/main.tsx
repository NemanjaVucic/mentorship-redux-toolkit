import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ApiProvider } from '@reduxjs/toolkit/query/react';

import App from './App';
import { store } from './redux-toolkit/store';
import { api } from './redux-toolkit/api';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={api}>
        <App />
      </ApiProvider>
    </Provider>
  </React.StrictMode>,
);
