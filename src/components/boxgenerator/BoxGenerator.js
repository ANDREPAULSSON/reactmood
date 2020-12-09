import React, { useState } from 'react'

export const BoxGenerator = (props) => {
	const [visible, setVisible] = useState(true)
	const [active, setActive] = useState(false)

	return (
		<div className={props.className ? ['tool' + ' ' + props.className]  : 'tool'}>
			<div className="tool-icons">
				<span className={active ? 'arrow-down active' : 'arrow-down'}><i className="fa fa-angle-double-down"></i>	</span>
			</div>
			<span className={active ? 'tool-name active' : 'tool-name'} onClick={() => { setVisible(!visible); setActive(!active) }}>{props.name}</span>
			<div className={visible ? 'tool-drop display-none' : 'tool-drop display-flex'}>
				{props.component}
			</div>
		</div>
	)
}
