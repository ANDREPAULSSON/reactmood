
import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'
import { UserContext } from '../../shared/provider/UserProvider'
import { Profile } from '../profile/Profile'
import './NavigationBar.css'

export const NavigationBar = () => {
	const history = useHistory()
	const [authenticatedUser,] = useContext(UserContext)

	const displayUserIfAuthenticated = () => {
		return authenticatedUser
			? <Profile />
			: <span className="signIn" onClick={() => history.push(RoutingPath.SignInView)}>Sign in</span>
	}

	const siteName = 'dailymood'

	return (
		<header className="site-header">
			<div className="navigationBarWrapper">
				<span className="site-name" onClick={() => history.push(RoutingPath.HomeView)}>{siteName}</span>
				
				{displayUserIfAuthenticated()}				
			</div>
		</header>
	)
}