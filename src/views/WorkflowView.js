import React, {useState, useEffect} from 'react'
import {DragNDrop} from '../components/dragndrop/DragNDrop'

const defaultData = [
	{title: 'Do', items:['Add nothing', 'Add something', 'Change anything']},
	{title: 'Doing', items:['Add function x', 'Change function y']},
	{title: 'Done', items:['Drink coffee', 'Eat food']}
]

export const WorkflowView = () => {
	const [data, setData] = useState()

	useEffect(() => {
		if (localStorage.getItem('List')) {
			console.log(localStorage.getItem('List'))
			setData(JSON.parse(localStorage.getItem('List')))
		} else {
			setData(defaultData)
		}
	}, [setData])

	return (
		<div className="mw-75">
			<div className="page-header">
				<h1>Workflow</h1>
				<span>Drag and drop test implementation, missing key features like remove and add.</span>
			</div>
			<div className='drag-n-drop-header'>
				<DragNDrop data={data} />
			</div>
		</div>
	)
}
