import React, {useEffect,useState} from 'react'
import QuoteService from '../../../shared/api/service/quoteService'
import QuoteTypeValue from './QuoteTypeValue'
import '../../boxes/Boxes.css'


export const QuoteBox = () => {
	const [data, setData] = useState()
	const [quoteType, setQuoteType] = useState('')
	const [loading, setLoading] = useState(true)
	const [count, setCount] = useState(0)

	const fetchDataFromQuoteAPI = async () => {
		setLoading(true)
		try {
			const response = await QuoteService.quoteType(quoteType)			
			console.log('response:','quotetype =',quoteType?quoteType:'empty-string',response)
			setData(response.data.quote)
			setLoading(false)
		} catch (error) {
			console.log(error)
			setLoading(false)
		}
	}

	const displayDataWhenDoneLoading = () => {	
		return <div className="box-inside-text">				
			<span>{data?.quoteText}</span>
			<br/>
			<span style={{fontWeight:'bold', fontFamily:'pacifico'}}> {`- ${data?.quoteAuthor}`}</span>							
		</div>		
	}

	useEffect(() => {
		if(count){
			fetchDataFromQuoteAPI()
		}	
	}, [count])

	return (
		<div className="box">
			<span className="box-inside-header">quoteBox.</span>
			<div className="box-inside-types">
				<button onClick={()=> {setQuoteType(QuoteTypeValue.Random); setCount(count +1)}}>Random quote</button>			
			</div>				
			<div className="box-inside">
				{loading
					? null
					: displayDataWhenDoneLoading()}		
			</div>
		</div>
	)
}
