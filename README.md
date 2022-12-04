# react-native-klikcair-component
react native component is custom component for react native. support typescript

## instalation
using npm:
`$ npm install react-native-klikcair-component`

using yarn:
`$ yarn add react-native-klikcair-component`

## Usage

_Note: if you using version react native >= 0.69 you must download and config your font Lato

```js
import {Button} from 'react-native-klikcair-component'

<Button props />

```

### Properties for for all component Button

| Props       | Description  | Default  | Type |
| ------------- |:-------------| :-----| -----: |
| **`isLoading`**     |to give the loading action to the `button` component  | `false` | `boolean` |
| **`disable`**      |  to disable the `button` component so that it cannot be clicked    |   `false` | `boolean` |
| **`category`** | to specify the category of the  `button`     |    `standard` | `string ('Standard','Circle','Square')`  |