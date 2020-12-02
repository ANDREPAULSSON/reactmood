import React from 'react'
import './ToolNavigation.css'
import { JokeBox } from '../boxes/jokebox/JokeBox'
import 'font-awesome/css/font-awesome.min.css'
import { BoxGenerator } from '../boxgenerator/BoxGenerator'

export const ToolNavigation = () => {
	return (
		<div className="tool-box">
			<div className="tool-nav">
				<BoxGenerator component={<JokeBox />} name={'jokebox'} />
				<BoxGenerator component={<JokeBox />} name={'testbox'}/>
				<BoxGenerator component={<JokeBox />} name={'testbox2'}/>
			</div>
		</div>

	)

}

