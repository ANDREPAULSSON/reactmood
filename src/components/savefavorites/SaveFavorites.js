import React, {useState, useEffect} from 'react'
//import BrowserCache from '../../shared/utils/BrowserCache'


export const SaveFavorites = (item) => {
	
	const [items, setItems] = useState([])
	const addItem = (item) => {
		// assuming no duplicates for demo purposes
		setItems([...items, item])
	}

	useEffect(() => {
		const items = JSON.parse(localStorage.getItem('items'))
		if(items){
			setItems(items)	
		}
			
	},[])

	useEffect(() => {
		localStorage.setItem('items', JSON.stringify(items))
	}, [items])


	// const Testing = (name) =>{
	// 	const newList = list.concat(name)
	// 	setList(newList)
	// 	localStorage.setItem(BrowserCache.favorites, newList)
		
	// }

	const [favorite, setFavorite] = useState(false)
	
	return (
		<span style={favorite ? {color:'firebrick', opacity:1} : {color:'black' ,opacity:.4}} className="tool-heart" onClick={()=> {addItem(item.name); setFavorite(!favorite) }}>
			<i className="fa fa-heart"></i>
		</span>
	)
}
