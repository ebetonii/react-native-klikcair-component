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

### Properties for all component Button

| Props       | Description  | Default  | Type |
| ------------- |:-------------| :-----| :----- |
| **`isLoading`**     |to give the loading action to the `button` component  | `false` | `boolean` |
| **`disable`**      |  to disable the `button` component so that it cannot be clicked    |   `false` | `boolean` |
| **`category`** | to specify the category of the  `button`     |    `standard` | `string ('Standard','Circle','Square')`  |
| **`type`** | to specify the type of the  `button`     |    `primary` | `string ('primary','secondary','link','textlink')`  |
| **`icon`** | to add an icon to the `button` component   |    - | `string`  |
| **`styleContainer`** | to give additional styling to the `button` component's container  |    - | `object`  |
| **`styleText`** | to give additional styling to the `button` component's text  |    - | `object`  |
| **`loadingColor`** | to add color to the loading props  |    `#1674BE` | `string`  |
| **`buttonColor`** | to add color to the `button`  |    `#1674BE` | `string`  |
| **`textColor`** | to add color to the text `button`  |    `#1674BE` | `string`  |

### Properties for `button` Standard

| Props       | Description  | Default  | Type |
| ------------- |:-------------| :-----| :----- |

| **`size`** | to specify the size of the  `button`     |    `long` | `string ('long','short')`  |