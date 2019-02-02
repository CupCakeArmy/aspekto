import * as React from 'react'

import { Button, Card, Flex, Input, Switch } from '../lib/index'

const App: React.FC = () => {
	return <div className={'fill'} style={{ fontFamily: `'Helvetica Neue', sans-serif` }}>
		<Flex.Container center className={'fill'}>
			<Flex.Item shrink>
				<Card>
					<Input label={'username'}/>
					<Input label={'password'} type={'password'}/>
					<br/>
					Keep Session <Switch checked={true} handle={console.log}/>
					<br/>
					<br/>
					<Button handle={() => console.log('Test')}>
						login
					</Button>
				</Card>
			</Flex.Item>
		</Flex.Container>
	</div>
}

export default App