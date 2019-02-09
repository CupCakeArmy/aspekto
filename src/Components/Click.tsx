import * as React from 'react'

export type ButtonProps = {
	handle?: () => any
}

export const Click: React.FC<ButtonProps & React.HTMLAttributes<HTMLElement>> = ({ handle, ...props }) => {
	const _click = () => {
		if (typeof handle === 'function') handle()
	}

	return <div {...props} onClick={_click} onTouchStart={_click}/>
}

export default Click