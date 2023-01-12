# Button

### Display

Referring to the need for the `<Button />` component in the **UI/UX** design team, there are several views as follows:

| Type <br/> Category| Primary  | Secondary  | Link | Link (Text Only) |
| :-------------: |:-------------: | :-----: | :-----: |  :-----: |
| `Standard Long` | ![long_primary](https://i.postimg.cc/yDJR00yH/long-primary.png ':size=200') | ![long_secondary](https://i.postimg.cc/nM0953dx/long-secondary.png ':size=200') | ![long_link](https://i.postimg.cc/56KvHsvg/long-link.png ':size=200') | `-` |
| `Standard Short` | ![short_primary](https://i.postimg.cc/DJhbVHkv/short-primary.png ':size=200') | ![short_secondary](https://i.postimg.cc/xJPN95nK/short-secondary.png ':size=200') | ![short_link](https://i.postimg.cc/Dm2bB9P5/short-link.png ':size=200') | ![short_link_text](https://i.postimg.cc/crLw4pK6/short-link-text.png ':size=200') |
| `Circle` | ![circle_primary](https://i.postimg.cc/XrTCLXsy/circle-primary.png ':size=200') | ![circle_secondary](https://i.postimg.cc/McVjFxL3/circle-secondary.png ':size=200') | ![circle_link](https://i.postimg.cc/9zpy2mQv/circle-link.png ':size=200') | `-` |
| `Square` | ![square_primary](https://i.postimg.cc/kRX6GSgL/square-primary.png ':size=200') | ![square_secondary](https://i.postimg.cc/2VtbjVRX/square-secondary.png ':size=200') | ![square_link](https://i.postimg.cc/2VyLfnJZ/square-link.png ':size=200') | `-` |



### Usage

```js
import {Button} from 'lib/component'

<Button props />

```

### `Button` all props

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

### `Button` standard props

| Props       | Description  | Default  | Type |
| ------------- |:-------------| :-----| :----- |
| **`size`** | to specify the size of the  `button`| `short` | `string ('long','short')`|
| **`round`** | to make round  `button`| `false` | `boolean`|
