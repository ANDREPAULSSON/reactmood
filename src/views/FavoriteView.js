import React  from 'react'

import {Favorites} from '../components/favorites/Favorites'


export const FavoriteView = () => {

	return (
		<div className="mw-75">
			<div className="page-header">
				<h1>Favorites</h1>
				<span>These boxes were made for pressing</span>
			</div>
			<Favorites/>
		</div>
	)
}
