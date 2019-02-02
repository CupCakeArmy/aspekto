import * as React from 'react'

export type ButtonProps = {
	handle?: (e: React.MouseEvent) => any
}

const Button: React.FC<ButtonProps & React.HTMLAttributes<HTMLElement>> = (props) => {
	const _click = (e: React.MouseEvent) => {
		if (typeof props.handle === 'function') props.handle(e)
	}

	return <div className={'button'} onClick={_click}>
		<div className="text">{props.children}</div>
		<div className="bg"/>
	</div>
}

export default Button