import http from '../jokeAPI'

const jokeType = jokeType => {
	return http.get(`/${jokeType}?`)
}

export default {
	jokeType
}