# Button

### Button

```js
import {Button} from 'lib/component'

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
| **`loadingColor`** | to add color to the loading props <em>(under development) <em/>  |    `#1674BE` | `string`  |
| **`buttonColor`** | to add color to the `button` <em> (under development) <em/>  |    `#1674BE` | `string`  |
| **`textColor`** | to add color to the text `button` <em> (under development) <em/>  |    `#1674BE` | `string`  |

### Properties for `button` Standard

| Props       | Description  | Default  | Type |
| ------------- |:-------------| :-----| :----- |
| **`size`** | to specify the size of the  `button`| `short` | `string ('long','short')`|
| **`round`** | to make round  `button`| `false` | `boolean`|
