import * as React from 'react'
import { useEffect, useRef, useState } from 'react'

export type InputProps = {
	valid?: (s: string) => boolean | Promise<boolean>,
	handle?: (s: string) => any
	disabled?: boolean,
	initial?: string,
	label: string
	type?: 'text' | 'email' | 'password'
}

const Input: React.FC<InputProps & React.HTMLAttributes<HTMLElement>> = (props) => {
	const { initial, handle, label, type, valid, disabled, ...rest } = props

	const [currentValue, setCurrentValue] = useState<string>(initial || '')
	const [isValid, setIsValid] = useState<boolean>(true)
	const [isActive, setIsActive] = useState<boolean>(false)

	const refInput = useRef<HTMLDivElement>(null)
	const refLabel = useRef<HTMLSpanElement>(null)
	const refField = useRef<HTMLInputElement>(null)

	const _valid = async (value: string) => {
		if (!value) setIsValid(true)
		else if (typeof valid === 'function') setIsValid(await valid(value))
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

	return (
		<div className={`input ${isValid ? '' : 'error'}`} ref={refInput}>
			<span className={`label${(isActive || currentValue) ? ' top' : ''}`} ref={refLabel}>{label}</span>
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
					if (typeof handle === 'function') handle(value)
					_valid(value)
				}}
			/>
		</div>
	)
}

export default Input