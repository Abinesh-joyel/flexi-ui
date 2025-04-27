# @glide-ui/react-listbox

An accessible Listbox component for React applications, offering custom select functionality with full WAI-ARIA compliance. Currently, it supports single-value selection, with multi-select support planned for future releases.

## 📦 Installation

You can install the library using either `npm` or `yarn`:

```bash
npm install --save @glide-ui/react-listbox
```

or

```bash
yarn add @glide-ui/react-listbox
```

## Demo

Check out the [Demo Usage](https://abinesh-joyel.github.io/glide-ui/listbox)

## Controlled listbox example

```tsx
import { useState } from 'react';
import Listbox from '@glide-ui/react-listbox';

const Options = [
  { id: 1, label: 'United States', value: 'us' },
  { id: 2, label: 'Canada', value: 'ca' },
  { id: 3, label: 'United Kingdom', value: 'un' },
  { id: 4, label: 'Australia', value: 'au' },
  { id: 5, label: 'India', value: 'in' },
  { id: 6, label: 'Germany', value: 'de' },
  { id: 7, label: 'France', value: 'fr' },
  { id: 8, label: 'Japan', value: 'jp' },
  { id: 9, label: 'China', value: 'cn' },
  { id: 10, label: 'Brazil', value: 'br' },
];

const ListboxBasic = () => {
  const [value, setValue] = useState('');
  return (
    <Listbox value={value} label="Select a country" onChange={setValue}>
      {Options.map(option => (
        <Listbox.Option
          key={option.id}
          value={option.value}
          label={option.label}
        >
          {option.label}
        </Listbox.Option>
      ))}
    </Listbox>
  );
};

export default ListboxBasic;
```

## API Props

### Listbox Component – API Props

| **Prop Name**  | **Type**                                                                | **Required** | **Description**                                                                                                                                      |
| -------------- | ----------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `value`        | `string`                                                                | Yes          | The currently selected value in the listbox.                                                                                                         |
| `label`        | `string`                                                                | Yes          | The label displayed for the listbox, shown when no value is selected.                                                                                |
| `options`      | `Option[]`                                                              | No           | An array of options to display in the listbox. Each option should include `id`, `label`, and `value`.                                                |
| `children`     | `React.ReactNode`                                                       | No           | Custom child components to render inside the listbox.                                                                                                |
| `renderOption` | `(option: Option, selected: boolean, index: number) => React.ReactNode` | No           | A custom renderer function for each option. The function also provides a flag to indicate if the option is selected. See the option interface below. |
| `renderValue`  | `(label: string, value: string) => React.ReactNode`                     | No           | A custom renderer function for the selected value.                                                                                                   |
| `onChange`     | `(value: string) => void`                                               | Yes          | A callback function triggered when the selected value changes.                                                                                       |

### Listbox.Option Component - API Props

| **Prop Name** | **Type**          | **Required** | **Description**                                                                |
| ------------- | ----------------- | ------------ | ------------------------------------------------------------------------------ |
| `label`       | `string`          | Yes          | The text displayed for the option.                                             |
| `value`       | `string`          | Yes          | The value associated with the option, used for selection and identification.   |
| `children`    | `React.ReactNode` | No           | Custom content to render inside the option. Overrides the `label` if provided. |
| `disabled`    | `boolean`         | No           | Specifies whether the option is disabled. Defaults to `false`.                 |

### Option Interface

| **Field Name** | **Type** | **Required** | **Description**                       |
| -------------- | -------- | ------------ | ------------------------------------- |
| `id`           | `number` | Yes          | A unique identifier for the option.   |
| `label`        | `string` | Yes          | The label to display for the option.  |
| `value`        | `string` | Yes          | The value associated with the option. |
