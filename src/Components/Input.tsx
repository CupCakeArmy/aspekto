import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import { removeRepeatingSpaces } from '../Util'

export type InputHandleArguments = { value: string, valid: boolean, label: string }
export type InputHandleFN = (obj: InputHandleArguments) => any

export type InputProps = {
	valid?: (s: string) => boolean | Promise<boolean>,
	handle?: InputHandleFN,
	disabled?: boolean,
	initial?: string,
	label: string
	type?: 'text' | 'email' | 'password'
}

const Input: React.FC<InputProps & React.HTMLAttributes<HTMLElement>> = ({ initial, handle, label, type, valid, disabled, ...rest }) => {

	const [currentValue, setCurrentValue] = useState<string>(initial || '')
	const [isValid, setIsValid] = useState<boolean>(true)
	const [isActive, setIsActive] = useState<boolean>(false)

	const refInput = useRef<HTMLDivElement>(null)
	const refLabel = useRef<HTMLSpanElement>(null)
	const refField = useRef<HTMLInputElement>(null)

	const _valid = async (value: string) => {
		if (typeof valid === 'function') setIsValid(await valid(value))
	}

	useEffect(() => {
		if (!refInput.current || !refField.current) return

		const setActive = (target: boolean) => () => setIsActive(target)

		refField.current.addEventListener('blur', setActive(false))
		refField.current.addEventListener('focus', setActive(true))
		refInput.current.addEventListener('mouseleave', setActive(false))
		refInput.current.addEventListener('mouseenter', setActive(true))
		refInput.current.addEventListener('touchstart', () => {
			if (refField.current) refField.current.focus()
			setActive(true)
		}, { passive: true })

		_valid(currentValue)
	}, [])

	useEffect(() => {
		if (handle) handle({ value: currentValue, valid: isValid, label })
	})

	return (
		<div className={removeRepeatingSpaces(`aspekto input ${(isValid || !currentValue) ? '' : 'error'} ${rest.className || ''}`)} ref={refInput}>
			<span className={`label ${((isActive && !disabled) || currentValue) ? 'top' : ''}`} ref={refLabel}>{label}</span>
			<input
				{...rest}
				ref={refField}
				disabled={disabled}
				className={'field'}
				type={type || 'text'}
				value={currentValue}
				onChange={e => {
					if (disabled) return
					const value = e.target.value
					setCurrentValue(value)
					_valid(value)
				}}
			/>
		</div>
	)
}

export default Input