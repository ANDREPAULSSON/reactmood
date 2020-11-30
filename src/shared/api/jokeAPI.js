import Axios from 'axios'

const jokeAPI = Axios.create({
	baseURL: 'https://sv443.net/jokeapi/v2/joke/Programming?'
})

export default jokeAPI