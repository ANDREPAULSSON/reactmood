import React, { useState, useContext} from 'react'
import { UserContext } from '../../shared/provider/UserProvider'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'
import BrowserCache from '../../shared/utils/BrowserCache'
import './SignIn.css'

export const SignIn = () => {
	const history = useHistory()
	const [username, setUsername] = useState()
	const [, setAuthenticatedUser] = useContext(UserContext)

	const login = (e) => {
		e.preventDefault()
		setAuthenticatedUser(username)
		localStorage.setItem(BrowserCache.username, username)
		history.push(RoutingPath.HomeView)
	}

	return (
		<div className="signIn-container">
			<form className="signIn-form">
				<span>Username</span>
				<input onChange={(event) => setUsername(event.target.value)} /> <br />
				<span>Password</span>
				<input type="password"/> <br />
				<button onClick={(e) => login(e)}>Login</button>
			</form>
		</div>
	)
}
