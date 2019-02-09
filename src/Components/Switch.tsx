import * as React from 'react'
import { removeRepeatingSpaces } from '../Util'

export type SwitchProps = {
	checked?: boolean
	handle?: (checked: boolean) => void
}

const Switch: React.FC<SwitchProps & React.HTMLAttributes<HTMLElement>> = ({ checked, handle, className, ...props }) => {

	const [isChecked, setIsChecked] = React.useState<boolean>(false)

	React.useEffect(() => {
		if (checked) setIsChecked(true)
	}, [])

	return <label className={removeRepeatingSpaces(`aspekto switch ${className || ''}`)} {...props}>
		<input
			type="checkbox"
			checked={isChecked}
			onChange={(e) => {
				const checked = e.target.checked
				setIsChecked(checked)
				if (typeof handle === 'function') handle(checked)
			}}
		/>
		<span className="slider"/>
	</label>
}

export default Switch