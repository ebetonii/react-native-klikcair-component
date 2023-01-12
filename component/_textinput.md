# TextInput

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
| **`type`**     |determines type of the `textinput` | `normal` | `string` <br/> `(normal,prefix,suffix,` <br/> `prefixsuffix,title,subtitle,`<br/> `titlensubtitle,phone)` |
| **`size`**     |determines the size of the `textinput`  | `medium` | `string('medium','large')` |
| **`keyboardType`**     |determines the keyboard type of the `textinput`  | `default` | enum `("default", 'numeric', 'email-address', "ascii-capable",`<br/>`'numbers-and-punctuation', 'url', 'number-pad', 'phone-pad',`<br/>`'name-phone-pad', 'decimal-pad', 'twitter', 'web-search',`<br/>`'visible-password')` |
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
