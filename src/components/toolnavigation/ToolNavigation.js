import React, { useState } from 'react'
import './ToolNavigation.css'
import {JokeBox} from '../jokebox/JokeBox'
import 'font-awesome/css/font-awesome.min.css'

export const ToolNavigation = () => {
	const [visible, setVisible] = useState(true)
	const [active, setActive] = useState(false)

	return (

		<div className="tool-box">
			<div className="tool-nav">
				<div className="tool">
					<span className={active ? 'arrow-down active' : 'arrow-down'}><i className="fa fa-angle-double-down"></i>	</span>		
					<span className ={active ? 'tool-name active' : 'tool-name'} onClick={()=>{ setVisible(!visible); setActive(!active)}}>Jokebox</span>	
					<div className={visible ? 'tool-drop display-none' : 'tool-drop display-flex'}>
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

