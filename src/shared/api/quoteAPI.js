import Axios from 'axios'

const quoteAPI = Axios.create({
	baseURL: 'https://quote-garden.herokuapp.com/api/v2/quotes',
	headers:{'Accept': 'application/json'}
})

export default quoteAPI