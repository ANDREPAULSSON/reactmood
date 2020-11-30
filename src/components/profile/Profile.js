import React, { useContext, useState } from 'react'
import { UserContext } from '../../shared/provider/UserProvider'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'
import './Profile.css'
import BrowserCache from '../../shared/utils/BrowserCache'

export const Profile = () => {
	const history = useHistory()
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

	const logout = () => {
		setAuthenticatedUser()
		localStorage.removeItem(BrowserCache.username)
		history.push(RoutingPath.HomeView)
	}

	const [visible, setVisible] = useState(false)

	return (
		<div className="user-box">
			<div className={visible ? 'profile-nav visible' : 'profile-nav hidden'}>
				<span>{authenticatedUser}</span>
				<span onClick={() => history.push(RoutingPath.SettingsView)}>Settings</span>
				<span onClick={() => logout()}>Logout</span>
			</div>
			<img 
				onClick={()=> setVisible(!visible)}
				className="profileImg"
				src={'https://thispersondoesnotexist.com/image'}
				alt={'Error...'}
			/>						
		</div>
	)
}