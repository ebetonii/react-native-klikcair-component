# react-native-klikcair-component
react native component is custom component for react native. support typescript

## instalation
using npm:
`$ npm install react-native-klikcair-component`

using yarn:
`$ yarn add react-native-klikcair-component`

## Usage

_Note: if you using version react native >= 0.69 you must download and config your font Lato._

### Button

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
| **`size`** | to specify the size of the  `button`| `short` | `string ('long','short')`|
| **`round`** | to make round  `button`| `false` | `boolean`|


### TextInput

```js
import {TextInput} from 'react-native-klikcair-component'

<TextInput props />

```

### Properties for all component TextInput
| Props       | Description  | Default  | Type |
| ------------- |:-------------:| :-----:| :-----: |
| **`placeholder`**     |to give the placeholder on `textinput` component  | - | `string` |
| **`onChangeText`**     |function to provide action when the text changes  | - | `function` |
| **`value`**     |displays the value contained in the `textinput` | - | `string` |
| **`disable`**     |gives disable action on `textinput`  | `false` | `boolean` |
| **`type`**     |determines type of the `textinput` | `normal` | `string` `(normal,prefix,suffix,prefixsuffix,title,subtitle,titlensubtitle,phone)` |
| **`size`**     |determines the size of the `textinput`  | `medium` | `string('medium','large')` |
| **`keyboardType`**     |determines the keyboard type of the `textinput`  | `default` | enum `("default", 'numeric', 'email-address', "ascii-capable", 'numbers-and-punctuation', 'url', 'number-pad', 'phone-pad', 'name-phone-pad', 'decimal-pad', 'twitter', 'web-search', 'visible-password')` Determines which keyboard to open, e.g.numeric. The following values work across platforms: `- default - numeric - email-address - phone-pad The following values work on iOS: - ascii-capable - numbers-and-punctuation - url - number-pad - name-phone-pad - decimal-pad - twitter - web-search` The following values work on Android: - visible-password |
| **`maxLength`**     |determines the length of the entered character | - | `number` |
| **`focusColor`**     |determines the color of the border when the keyboard is focused | `#40A9FF` | `string` |
| **`blurColor`**     |determines the color of the border when the keyboard is blur or idle | `#D9D9D9` | `string` |
| **`style`**     |gives additional style to the `textinput` | - | `object` |

### Properties for component `TextInput` type normal & title
| Props       | Description  | Default  | Type |
| ------------- |:-------------:| :-----:| :-----: |
| **`isEmpty`**     |option to allow empty `textinput` | `false` | `boolean` |
| **`isMandatory`**     |option that requires `textinput` to be filled | `false` | `boolean` |

### Properties for component `TextInput` type subtitle
| Props       | Description  | Default  | Type |
| ------------- |:-------------:| :-----:| :-----: |
| **`subtitleType`**     |determines the type of subtitle | `normal`|`error`,`normal` |

### Properties for component `TextInput` type titlensubtitle
| Props       | Description  | Default  | Type |
| ------------- |:-------------:| :-----:| :-----: |
| **`isEmpty`**     |option to allow empty `textinput` | `false` | `boolean` |
| **`isMandatory`**     |option that requires `textinput` to be filled | `false` | `boolean` |
| **`subtitleType`**     |determines the type of subtitle | `normal`|`error`,`normal` |

### Properties for component `TextInput` type phone
| Props       | Description  | Default  | Type |
| ------------- |:-------------:| :-----:| :-----: |
| **`countryNumber`**     |to specify the country number in the `textinput` | `+62` | `string` |
| **`contextMenuHidden`**     | | `true` | `boolean` |

### Properties for component `TextInput` type prefix,suffix & prefixsuffix
| Props       | Description  | Default  | Type |
| ------------- |:-------------:| :-----:| :-----: |
| **`icon`**     | adding icon to `textinput` | - | `any` |