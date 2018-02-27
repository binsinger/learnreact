import fetch from 'isomorphic-fetch'
import {  prefix, suffix } from '../config'


export function fetchJSON(url, params, target) {
	const data = {
		method: 'POST',
		'Content-Type': 'application/json',
		body: JSON.stringify(params),
	}
	let newUrl
	if (target) {
		newUrl = `${target}${url}${suffix}`
	} else {
		newUrl = `${prefix}${url}${suffix}`
	}
	return fetch(newUrl, data)
}

export const fetchJOSNByPost = (url, target) => query => fetchJSON(url, query, target)
