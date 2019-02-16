import * as React from 'react'

import { Button, Card, Click, Flex, HR, Switch, useFormHelper, Input } from '../lib/index'

const App: React.FC = () => {
	// const [username, setUsername] = useState({})
	const [handler, submit] = useFormHelper()

	return <div className={'fill'} style={{ fontFamily: `'Helvetica Neue', sans-serif` }}>
		<Flex.Container center className={'fill'}>
			<Flex.Item shrink>
				<Card>
					<h1>Form</h1>
					<Input label={'username'} valid={s => /test/.test(s)} handle={handler()} disabled/>
					<Input label={'password'} type={'password'} handle={handler()}/>
					<Input label={'repeat-password'} type={'password'} handle={handler()}/>
					<br/>
					Keep Session <Switch checked={true} handle={console.log}/>
					<br/>
					<br/>
					<Button handle={() => {
						console.log(submit())
					}}>
						login
					</Button>
					<HR horizontal/>
					<h2>Sub</h2>
					<Click handle={() => console.log('test')}><i className="icon ion-md-heart"/></Click>
				</Card>
			</Flex.Item>
		</Flex.Container>
	</div>
}

export default App