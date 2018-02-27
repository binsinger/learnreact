import React from 'react'
import { Router, Route, IndexRoute} from 'react-router'
import hashHistory from './history'

import App from './base'
import Welcome from './pages/welcome'

//table list
const table = (location, cb) => {
	require.ensure([], (require) => {
		cb(null, require('./pages/menu/table').default)
	}, 'table')
}

//graph
const echarts = (location,cb) => {
	require.ensure([], (require) => {
		cb(null, require('./pages/menu/echarts').default)
	}, 'echarts')
}

//login
const Login = (location, cb) => {
	require.ensure([], (require) => {
		cb(null, require('./pages/login').default)
	}, 'login')
}

//sign up
const Register = (location, cb) => {
	require.ensure([], (require) => {
		cb(null, require('./pages/register').default)
	}, 'register')
}

//chat
const chat = (location, cb) => {
	require.ensure([], (require) => {
		cb(null, require('./pages/chat').default)
	}, 'chat')
}

//editor
const editor = (location, cb) => {
	require.ensure([], (require) => {
		cb(null, require('./pages/menu/editor').default)
	}, 'editor')
}

//if login
function isLogin(nextState, replaceState){
	const token = sessionStorage.getItem('token')
	if(!token){
		replaceState('/login')
		// hashHistory.push(/login)
	}
}

export default () => {
	<Router hsitory={hashHistory}>
		<Route path="" component={App} onEnter={isLogin}>
			<IndexRoute component={welcome} />
			<Route path="/table" getComponent={table} />
			<Route path="/echarts" getComponent={echarts} />
			<Route path="/editor" getComponent={editor} />
			<Route path="/chat" getComponent={chat} />
		</Route> 
		<Route path="/login" getComponent={Login} />
		<Route path="/register" getComponent={Register} />
	</Router>
	
}
