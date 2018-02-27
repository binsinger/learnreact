import React, { Component } from 'react'
import { connect } from 'react-redux'
import { message } from 'antd'
import 'style/base.less'

import Header from './header'
import LeftNav from './nav'
import TabList from './tabList'


@connect((state, props) => ({}))
export default class Arr extends Component {
	constructor(props, context) {
		super(props)
		this.state = {
			pageHeight: 0,
			isLeftNavMini: false,
		}
		this.isLeftNavMini = this.isLeftNavMini.bind(this)
	}

	componentDidMount() {
		message.config({
			duration: 3,
		})
	}

	componentWillMount() {
		if(sessionStorage.getItem('isLeftNavMini') == 'false') {
			this.setState({
				isLeftNavMini: false,
			})
		}
		if(sessionStorage.getItem('isLeftNavMini') == 'true') {
			this.setState({
				isLeftNavMini: true,
			})
		}
	}

	isLeftMini(val) {
		this.setstate({
			isLeftNavMini: val,
		}, () => {
			sessionStorage.setItem('isLeftNavMini',val)
		})
	}

	render() {
		const { location, children } = this.props
		return (
			<div id="container" className="effect easeInOutBack mainnav-lg aside-bright">
				<Header />
				<div className="boxed">
					<div className={this.state.isLeftNavMini ? 'boxed boxed-mini' : 'boxed'}>
						<div id="content-container" className="content-container">
							<div id="page-content">
								<TabList />
								{children}
							</div>
						</div>
					</div>
					<leftNav location={location}
					leftNavMode={this.isledtNavMini}
					/>
				</div>
			</div>
			)
	}


}
