import http from '../quoteAPI'

const quoteType = quoteType=> {
	return http.get(`${quoteType}`)
}

export default {
	quoteType
}