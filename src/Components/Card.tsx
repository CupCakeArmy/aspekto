import * as React from 'react'
import { removeRepeatingSpaces } from '../Util'

export type CardProps = {}

const Card: React.FC<CardProps & React.HTMLAttributes<HTMLElement>> = ({ className, ...props }) => {
	return <div className={removeRepeatingSpaces(`aspekto card ${className || ''}`)} {...props}>
		{props.children}
	</div>
}

export default Card