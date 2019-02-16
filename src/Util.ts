import { InputHandleArguments } from './Components/Input'

export const removeRepeatingSpaces = (s: string): string => s.replace(/ {2,}/g, ' ').trim()

type FormHelperState = { [field: string]: InputHandleArguments }
type FormHelperHandlerFN = (field?: string) => (input: InputHandleArguments) => void
type FormHelperSubmitFN = () => FormHelperState

export const useFormHelper = (): [FormHelperHandlerFN, FormHelperSubmitFN] => {
	const form: FormHelperState = {}

	const submit: FormHelperSubmitFN = () => Object.freeze(form)

	const handler: FormHelperHandlerFN = (field) => (obj) => {
		form[field || obj.label] = obj
	}

	return [handler, submit]
}