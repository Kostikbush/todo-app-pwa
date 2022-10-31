import React from 'react';
import ReactDOM from 'react-dom/client';
import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import './Components/SettingComp/ChangeFont/changeFont.scss';
import App from './App';
import rootReducer from './redux/reducer';
import Layout from './Components/Layout';
import './index.scss';

const middlewareEnhancer = applyMiddleware(thunk);
const store = createStore(rootReducer, compose(middlewareEnhancer));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<Layout>
			<App />
		</Layout>
	</Provider>,
);
