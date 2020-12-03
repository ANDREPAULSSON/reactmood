import React from 'react'
import './Favorites.css'


export const Favorites = () => {

	let localx = JSON.parse(localStorage.getItem('items'))



	return (
		<div>	
			<div className="favorites">
				{localx.map((data, key) => {
					return (
						<div key={key}>
							{data}
						</div>
					)
				})}
			</div>
		</div>
	)
}
