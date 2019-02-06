import * as React from 'react'

export type CardProps = {}

const Card: React.FC<CardProps & React.HTMLAttributes<HTMLElement>> = (props) => {
	return <div className={'card'}>
		{props.children}
	</div>
}

export default Card