import * as React from 'react'

import { Button, Card, Flex, Input, Switch } from '../lib/index'

const App: React.FC = () => {
	return <div className={'fill'} style={{ fontFamily: `'Helvetica Neue', sans-serif` }}>
		<Flex.Container center className={'fill'}>
			<Flex.Item shrink>
				<Card>
					<Button handle={() => console.log('Test')}>
						Click
					</Button>
					<br/>
					<br/>
					<Switch checked={true} handle={console.log}/>
					<br/>
					<br/>
					<Input initial={'test'} disabled valid={(s)=> s ==='test'} label={'Username'} handle={console.log}/>
				</Card>
			</Flex.Item>
		</Flex.Container>
	</div>
}

export default App