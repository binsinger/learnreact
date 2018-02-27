
import { createAction } from 'redux-action'
import { common } from 'api'
import { createAjaxAction, fakeAjaxAction } from 'utils'

export const fetchLogin = createAjaxAction(common.login)
export const fetchRegister = createAjaxAction(common.register)
