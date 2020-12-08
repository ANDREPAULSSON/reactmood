import React, { useContext, useState, useEffect } from 'react'
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
	useEffect(() => {
		return () => {
			alert('Bye :(')
		}
	}, [])

	const [visible, setVisible] = useState(true)

	return (
		<div className="user-box">
			<div className={visible ? 'profile-nav visible' : 'profile-nav hidden'}>
				<span>{authenticatedUser}</span>
				<span onClick={() => history.push(RoutingPath.WorkflowView)}>Workflow</span>
				<span onClick={() => logout()}>Logout</span>
			</div>				
			<img 
				onClick={()=> setVisible(!visible)}
				className="profile-img"
				src={'https://thispersondoesnotexist.com/image'}
				alt={'Error...'}
			/>							
		</div>
	)
}