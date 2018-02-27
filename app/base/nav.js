import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory, Link } from 'react-router'
import { Menu, Icon, Spin } from 'antd'
import { updateTabList } from 'actions/tabList'

const { SubMenu } = Menu 

@connect((state, props) => ({
	config: state.config,
}))  

export default class LeftNav extends Component  {
	constructor(props, context) {
		super(props, context)

		const { pathname } = props.location
		this.state = {
			current: pathname,
			openKeys: ['sub1'],
			isLeftNavMini: false,
		}

		this._handleClick = this._handleClick.bind(this)
		this._handleToggle = this._handleToggle.bind(this)
		this.navMini = this.navMini.bind(this)
		this.renderLeftNav = this.renderLeftNav.bind(this)
	}

	componentWillMount() {
		if (sessionStorage.getItem('isLeftNavMini') == 'false') {
			this.setState({
				isLeftNavMini: false,
			})
		}
		if (sessionStorage.getItem('lsLeftNavMini') == 'true') {
			this.setState({
				isLeftNavMini: true,
			})
		}
		const menu = window.gconfig.nav
		const curPath = `${this.props.location.pathname.replace('/','')}`
		let len = 0
		let curSub = 0
		menu.map((item) => {
			if (item.url && curPath === item.url) {
				curSub = len
			} else if (item.children && item.children.length > 0) {
				item.children.map((record) => {
					if (curPath === record.url) {
						curSub = len
					}
				})
			}
			if (item.children && item.children.length > 0) {
				len++
			}
		})

		this.setState({
			openKeys: [`sub${curSub}`],
		})
	}

	_handleClick = (e) => {
		this.setState({
			current : e.key,
			// openKeys: e.keyPath.slice(1),
		}, () => {
			hashHistory.push(e.key)
			this.props.dispatch(updateTabList({ title: e.item.props.name, conent: '', key: e.key}))
		})
	}	

	_handleToggle = (openKeys) => {
		const { state } = this;
		const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1))；
		const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

		let nextOpenKeys = [];
		if (latestOpenKey) {
			nextOpenKeys = this.getAncestorKeys(latestOpenKey)
		}
	}
}
