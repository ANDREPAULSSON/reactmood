import React, {useState, useEffect} from 'react'
import JokeService from '../../../shared/api/service/jokeService'
import '../../boxes/Boxes.css'
import JokeTypeValue from './JokeTypeValue'


export const JokeBox = () => {

	const [data, setData] = useState()
	const [jokeType, setJokeType ] = useState('')
	const [loading, setLoading] = useState(true)
	const [getCounter, setGetCounter] = useState(0)
	
	const fetchDataFromJokeAPI = async () => {
		setLoading(true)
		try {
			const response = await JokeService.jokeType(jokeType.toLowerCase())			
			console.log('response:','searchTerm =',jokeType?jokeType:'empty-string',response)
			setData(response.data.results[Math.floor(Math.random() * response.data.results.length)])
			setLoading(false)
		} catch (error) {
			console.log(error)
			setLoading(false)
		}
	}

	const displayDataWhenDoneLoading = () => {	
		return <div className="box-inside-text">				
			<span>{data?.joke}</span>								
		</div>		
	}
		
	useEffect(() => {
		if(getCounter){
			fetchDataFromJokeAPI()
		}	
	}, [getCounter])

	return (

		<div className="box">
			<span className="box-inside-header">jokeBox.</span>
			<div className="box-inside-types">
				<button onClick={()=> {setJokeType(JokeTypeValue.Dad); setGetCounter(getCounter +1)}}>Dad joke</button>
				<button onClick={()=> {setJokeType(JokeTypeValue.Pirate); setGetCounter(getCounter +1)}}>Pirate joke</button>
			</div>				
			<div className="box-inside">
				{loading
					? null
					: displayDataWhenDoneLoading()}
			</div>
		</div>
	)
}
