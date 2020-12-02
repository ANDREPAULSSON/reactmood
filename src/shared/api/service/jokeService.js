import http from '../jokeAPI'

const jokeType = jokeType => {
	return http.get(`search?term=${jokeType}`)
}

export default {
	jokeType
}