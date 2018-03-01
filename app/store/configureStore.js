
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { logger, router, reduxRouterMiddelware } form '../middleware'
import rootReducer from '../reducers'

const nextReducer = require('../reducers')
