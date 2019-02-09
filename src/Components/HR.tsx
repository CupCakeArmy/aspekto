import * as React from 'react'
import { removeRepeatingSpaces } from '../Util'

export type HRProps = {
	horizontal?: boolean
	vertical?: boolean
}

const HR: React.FC<HRProps & React.HTMLAttributes<HTMLElement>> = ({ className, horizontal, vertical, ...props }) => {
	return <span
		className={removeRepeatingSpaces(`aspekto hr ${horizontal ? 'h' : ''} ${vertical ? 'v' : ''} ${className || ''}`)}
		{...props}/>
}

export default HR