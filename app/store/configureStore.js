
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { logger, router, reduxRouterMiddelware } form '../middleware'
import rootReducer from '../reducers'

const nextReducer = require('../reducers')

export default function configure(initialStage) {
	const create = window.devToolsExtension
		? window.devToolsExtension
		: createStore

	const createStoreWithMiddleware = applyMiddleware(
		reduxRouterMiddleware,
		thunkMiddleware,
		logger,
		router,
	)(create)

	const store = createStoreWithMiddleware(rootReducer, initialState)

	if (module.hot) {
		module.hot.accept('../reducers', () => {
			store.replaceReducer(nextReducer)
		})
	}

	return store
}


