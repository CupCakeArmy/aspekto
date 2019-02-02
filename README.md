# aspekto
UI Kit written in Typescript. Declaration files are included.

Only [`13kB`](https://bundlephobia.com/result?p=aspekto)

<p align="center">
  <img src="https://github.com/CupCakeArmy/aspekto/raw/master/test/aspekto.gif"/>
</p>

## Install

```bash
npm install --save aspekto
```

## Components

### Button

```jsx
import { Button } from 'aspekto'

<Button handle={()=> console.log(`You clicked me! ❤️`)}>My Button</Button>
```

#### handle: `()=> any`
Callback function that gets fired when the button is clicked

### Switch


```jsx
import { Switch } from 'aspekto'

<Switch handle={(value)=> console.log(`You chose: ${value ? '🍕': '🍔'}`)} />
```

#### handle `(value: boolean)=> any`
Callback function that gets fired when the switch is altered

#### checked `boolean`
Initial value of the switch

### Input

```jsx
import { Input } from 'aspekto'
<Input valid={(s)=> s ==='john'} label={'username'} />
```

#### label [required] `string`
The label of the field

#### handle `(s: string) => any`
Callback function that gets fired when the input value changes

#### valid `(s: string) => boolean | Promise<boolean>`

Function that gets called to check if the input is valid.
This can be an async call to an API or simple function that checks a regex

###### Example

```jsx
const isUsernameAvailable = async (username) => await MyCoolApi.call(username)

<Input valid={isUsernameAvailable} label={'username'}/>
```

#### disabled `boolean`
Whether the component is disabled or not

#### initial `string`
Initial value of the input field
