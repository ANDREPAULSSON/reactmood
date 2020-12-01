import React, {useState} from 'react'
import JokeService from '../../shared/api/service/jokeService'
import './JokeBox.css'


export const JokeBox = () => {

	const [data, setData] = useState()
	const [type, ] = useState('')
	const [loading, setLoading] = useState(true)

	const fetchDataFromJokeAPI = async () => {
		setLoading(true)
		try {
			const response = await JokeService.jokeType(type.toLowerCase())
			setData(response.data)
			setLoading(false)
		} catch (error) {
			console.log(error)
			setLoading(false)
		}
	}

	const displayDataWhenDoneLoading = () => {
		return <div className="joke">
			{/* <span className="joke-type">{data?.type}</span> */}
			<span>{data?.joke}</span>
			<span className="joke-setup">{data?.setup}</span>
			<br/>
			<span className="joke-delivery">{data?.delivery}</span>					
		</div>
	}

	return (

		<div className="jokeBox">
			<span className="joke-types-header">JokeBox.</span>
			<div className="joke-types">
				<button onClick={()=> fetchDataFromJokeAPI()}>Any</button>
				<button onClick={()=> fetchDataFromJokeAPI()}>Dark</button>
				<button onClick={()=> fetchDataFromJokeAPI()}>Spooky</button>
			</div>
			{/* <input onChange={(event) => setSearch(event.target.value)} disabled/> */}
				
			<div className="joke-container">
				{loading
					? null
					: displayDataWhenDoneLoading()}
			</div>
		</div>
	)
}
