import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './Components/SettingComp/ChangeFont/changeFont.scss'
import App from './App';
import thunk from 'redux-thunk';
import  rootReducer  from './redux/reducer';
import { createStore, compose, applyMiddleware } from "redux";
import Layout from './Components/Layout';
import { Provider } from 'react-redux';
const middlewareEnhancer = applyMiddleware(thunk)
const store = createStore(rootReducer, compose(middlewareEnhancer));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <Layout>
        <App/>
      </Layout>
    </Provider>
);


