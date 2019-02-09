import * as React from 'react'

import { Button, Card, Flex, Input, Switch, HR, Click } from '../lib/index'


const App: React.FC = () => {
	return <div className={'fill'} style={{ fontFamily: `'Helvetica Neue', sans-serif` }}>
		<Flex.Container center className={'fill'}>
			<Flex.Item shrink>
				<Card>
					<h1>Form</h1>
					<Input label={'username'}/>
					<Input label={'password'} type={'password'}/>
					<br/>
					Keep Session <Switch checked={true} handle={console.log}/>
					<br/>
					<br/>
					<Button handle={() => console.log('Test')}>
						login
					</Button>
					<HR horizontal/>
					<h2>Sub</h2>
					<Click handle={()=>console.log('test')}><i className="icon ion-md-heart"/></Click>
				</Card>
			</Flex.Item>
		</Flex.Container>
	</div>
}

export default App