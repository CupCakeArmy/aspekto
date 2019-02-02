import * as React from 'react'
import { removeRepeatingSpaces } from '../Util'

export type FlexContainerProps = {
	vertical?: boolean,
	horizontal?: boolean,
	center?: boolean,
	fill?: boolean
}

export type FlexItemProps = {
	shrink?: boolean
	grow?: boolean
}

const Container: React.FC<FlexContainerProps & React.HTMLAttributes<HTMLElement>> = (props) => {
	const { vertical, horizontal, center, fill } = props
	return <div className={removeRepeatingSpaces(
		`flex col ${vertical ? 'vertical' : ''} ${center ? 'center' : ''} ${horizontal ? 'horizontal' : ''} ${fill ? 'fill' : ''} ${props.className || ''}`,
	)}>
		{props.children}
	</div>
}

const Item: React.FC<FlexItemProps & React.HTMLAttributes<HTMLElement>> = (props) => {
	const { shrink, grow } = props
	return <div className={removeRepeatingSpaces(
		`flex row ${shrink ? 'shrink' : ''} ${grow ? 'grow' : ''}`,
	)}>
		{props.children}
	</div>
}

export default {
	Container,
	Item,
}