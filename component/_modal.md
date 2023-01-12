# Modal

### usage

```js
import {Modal} from 'lib/component'
import {useRef} from 'React'

const modalRef = useRef();

const openModal = () => {
    modalRef.current.open()
}

<Modal ref={modalRef} props />

```

### Properties for all component Button

| Props       | Description  | Default  | Type |
| ------------- |:-------------| :-----| :----- |
| **`ref`**     |Calling the function located within the `modal` | `-` | `function`,{ `close()`,`open()` } |
| **`action`**     |Providing action to the **primary button** within the `modal` | `-` | `function` |
| **`titleBtn`**     |title of **primary button** in `modal` | `-` | `string` |
| **`close`**     |An action that determines whether the `modal` can be closed or not. | `true` | `boolean` |
| **`type`**     |Determining the type of `modal` to be used | `-` | `string`,{ `information`,`medium`, `small` } |

### Properties for `modal` information

| Props       | Description  | Default  | Type |
| ------------- |:-------------| :-----| :----- |
| **`title`** |Providing a title for the `modal` (located above the center of the `modal`) | `-` | `string` |
| **`withoutTitle`** |Determining whether the title on the `modal` will be displayed or not | `false` | `boolean` |
| **`customContent`**     |Providing child components to be used within the `modal`| `-` | `React Native Component` |
| **`image`** |Providing an image in the `modal`| `-` | `string` |
| **`withoutBtn`** |Determining whether the `modal` uses a button component or not | `false` | `boolean` |
| **`height`** |Determining the height of the `modal` | `320` | `number` |

### Properties for `modal` small

| Props       | Description  | Default  | Type |
| ------------- |:-------------| :-----| :----- |
|**`text`** |Providing a description text within the `modal`| `-` | `string` |
|**`back`** |Determining whether the back or secondary button is displayed or not| `true` | `boolean` |
|**`backAction`** |Providing action to the back or secondary button within the `modal`| `-` | `function` |
|**`titleBackBtn`** |Providing a title for the back or secondary button within the `modal`| `TUTUP` | `string` |

### Properties for `modal` medium

| Props       | Description  | Default  | Type |
| ------------- |:-------------| :-----| :----- |
|**`text`** |Providing a description text within the `modal`| `-` | `string` |
|**`html`** |Determining whether the props `text` or description uses `HTML` format| `false` | `boolean` |
| **`title`** |Providing a title for the `modal` (located above the center of the `modal`) | `-` | `string` |
| **`titleStyle`** |Providing additional styling for the title component within the `modal` | `-` | `StyleSheet` |
|**`back`** |Determining whether the back or secondary button is displayed or not| `true` | `boolean` |
|**`actionBack`** |Providing action to the back or secondary button within the `modal`| `-` | `function` |
|**`titleBackBtn`** |Providing a title for the back or secondary button within the `modal`| `TUTUP` | `string` |
| **`disableBtn`** |Determining whether the primary or action button is clickable or not| `false` | `boolean` |
| **`image`** |Providing an image in the `modal`| `-` | `string` |

