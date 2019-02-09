import * as React from 'react'
import { removeRepeatingSpaces } from '../Util'

export type ButtonProps = {
	handle?: () => any
}

export const Click: React.FC<ButtonProps & React.HTMLAttributes<HTMLElement>> = ({ handle, className, ...props }) => {
	const _click = () => {
		if (typeof handle === 'function') handle()
	}

	return <div {...props} onClick={_click} onTouchStart={_click}
				className={removeRepeatingSpaces(`aspekto click ${className || ''}`)}/>
}

export default Click