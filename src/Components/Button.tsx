import * as React from 'react'
import { removeRepeatingSpaces } from '../Util'

export type ButtonProps = {
	handle?: (e: React.MouseEvent) => any
}

const Button: React.FC<ButtonProps & React.HTMLAttributes<HTMLElement>> = ({ className, handle, children, ...props }) => {
	const _click = (e: React.MouseEvent) => {
		if (typeof handle === 'function') handle(e)
	}

	return <div className={removeRepeatingSpaces(`aspekto button ${className || ''}`)} onClick={_click}>
		<div className="text">{children}</div>
		<div className="bg"/>
	</div>
}

export default Button