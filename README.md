# aspekto
UI Kit written in Typescript.

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

<Switch handle={(value)=> console.log(`You chose: ${value ? '🍕': '🍔'}`)}/>
```

#### handle: `()=> any`
Callback function that gets fired when the button is clicked

#### checked: `boolean`
Initial value of the switch
