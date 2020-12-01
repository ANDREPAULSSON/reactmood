import React, { useState } from 'react'
import './ToolNavigation.css'
import {JokeBox} from '../jokebox/JokeBox'
import 'font-awesome/css/font-awesome.min.css'

export const ToolNavigation = () => {
	// const history = useHistory()
	const [visible, setVisible] = useState(true)

	return (

		<div className="tool-box">
			<div className="tool-nav">
				<div className="tool">
					<span className="arrow-down"><i className="fa fa-angle-double-down"></i>	</span>		
					<span className ="tool-name jokebox"onClick={()=> setVisible(!visible)}>Jokebox</span>	
					<div className={visible ? 'tool-drop display-none' : 'tool-drop display-block'}>
						<JokeBox/>
					</div>									
				</div>		
				<div className="tool">		
					<span className="arrow-down"><i className="fa fa-angle-double-down"></i>	</span>		
					<span className ="tool-name undefined">Coming..</span>
				</div>	
				<div className="tool">
					<span className="arrow-down"><i className="fa fa-angle-double-down"></i>	</span>		
					<span className ="tool-name undefined">Coming..</span>
				</div>	
			</div>
		</div>

	)

}

