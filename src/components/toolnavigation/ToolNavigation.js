import React from 'react'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'
import './ToolNavigation.css'

export const ToolNavigation = () => {
	const history = useHistory()

	return (

		<div className="tool-box">
			<span className="tool-box-header">Select tool</span>
			<div className="tool-nav">
				<span className ="tool"onClick={() => history.push(RoutingPath.JokeBoxView)}>Jokebox</span>		
				<span className ="tool"onClick={() => history.push(RoutingPath.JokeBoxView)}>Jokebox</span>
				<span className ="tool"onClick={() => history.push(RoutingPath.JokeBoxView)}>Jokebox</span>
			</div>
		</div>

	)

}

