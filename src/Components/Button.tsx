import * as React from 'react'
import { removeRepeatingSpaces } from '../Util'

type handleFN = React.TouchEvent | React.MouseEvent
export type ButtonProps = {
	handle?: (e: handleFN) => any
}

const Button: React.FC<ButtonProps & React.HTMLAttributes<HTMLElement>> = ({ className, handle, children }) => {
	const _click = (e: handleFN) => {
		if (typeof handle === 'function') handle(e)
	}

	return <div onClick={_click} onTouchStart={_click}
				className={removeRepeatingSpaces(`aspekto button ${className || ''}`)}>
		<div className="text">{children}</div>
		<div className="bg"/>
	</div>
}

export default Button