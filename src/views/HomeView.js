import React from 'react'
import {ToolNavigation} from '../components/toolnavigation/ToolNavigation'

export const HomeView = () => {
	return (
		<div className="mw-75">
			<div className="page-header">
				<h1>Ready for some good vibes?</h1>
				<span>Press on a box to start vibin.</span>

			</div>
			<ToolNavigation/>
		</div>
	)
}
