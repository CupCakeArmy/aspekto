import * as React from 'react'

export type SwitchProps = {
	checked?: boolean
	handle?: (cheched: boolean) => void
}

const Switch: React.FC<SwitchProps & React.HTMLAttributes<HTMLElement>> = (props) => {

	const [isChecked, setIsCheched] = React.useState<boolean>(false)

	React.useEffect(() => {
		if (props.checked) setIsCheched(true)
	}, [])

	return <label className="switch">
		<input
			type="checkbox"
			checked={isChecked}
			onChange={(e) => {
				const checked = e.target.checked
				setIsCheched(checked)
				if (typeof props.handle === 'function') props.handle(checked)
			}}
		/>
		<span className="slider"/>
	</label>
}

export default Switch