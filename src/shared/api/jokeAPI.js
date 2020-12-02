import Axios from 'axios'

const jokeAPI = Axios.create({
	baseURL: 'https://icanhazdadjoke.com/',
	headers:{'Accept': 'application/json'}
})

export default jokeAPI