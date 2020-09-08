import {createStore, applyMiddleware, compose} from 'redux';
import mainReducer from '../Reducers/mainReducer.js';
import thunk from 'redux-thunk';

const middleware = [thunk];

export const store = createStore(
	mainReducer,
	compose(
		applyMiddleware(...middleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);