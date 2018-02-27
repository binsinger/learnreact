
import { createAction } from 'redux-action'
import { house } from 'api'
import { createAjaxAciton } from 'utils'

export const requestHouseCheckList = createAction('request houseCheck list')
export const recevieHouseCheckList = createAction('receive houseCheck list')
export const fetchHouseCheckList = createAjaxAction(
	house.houseCheckList,
	requestHouseCheckList,
	receiveHouseCheckList
)

export const updateHouseCheckListQuery = createAction('update houseCheck search query', payLoad => payload)
export const resetHouseCheckListQuery = createAction('reset houseCheck search query')

export const requestHouseDetail = createAction('request house detail')
export const receiveHouseDetail = createAction('receive house detail')
export const fetchHouseDetail = createAction(house.houseDetail, requestHouseDetail, receiveHouseCheckList)
