# @glide-ui/react-tabs

**@glide-ui/react-tabs** is a lightweight, highly customizable **tab component library** for **React**. It provides a **flexible API** for building tab-based navigation systems with multiple styles, including **line-based tabs, segment-based tabs, and card-style tabs**. The library is built using **accessibility (ARIA-compliant)** in mind.

## 🚀 Features

- ✅ **Customizable** – Easily style tabs using class-based selectors and flexible props.
- ✅ **Multiple Styles** – Supports **line, segment, and card-based tabs** out of the box.
- ✅ **Accessible (ARIA Support)** – Ensures keyboard and screen-reader compatibility. _(More enhancements coming soon!)_
- ✅ **Composable & Extendable** – Implements the **Compound Component Pattern** for better flexibility.

## 📦 Installation

You can install the library using either `npm` or `yarn`:

```bash
npm install --save @glide-ui/react-tabs
```

or

```bash
yarn add @glide-ui/react-tabs
```

## Demo

Check out the [Demo Usage](https://abinesh-joyel.github.io/glide-ui/)

## Controlled Tabs Example

```tsx
import React, { useState } from 'react';
import Tabs from '@glide-ui/react-tabs';
import '@glide-ui/react-tabs/style.css';

function App() {
  const [activeTab, setActiveTab] = useState(0);

  const onSelectedTab = (index: number) => {
    setActiveTab(index);
  };

  return (
    <Tabs value={activeTab}>
      <Tabs.TabList onTabChange={onSelectedTab}>
        <Tabs.Tab>
          <span>Eye</span>
        </Tabs.Tab>
        <Tabs.Tab>
          <span>Comments</span>
        </Tabs.Tab>
        <Tabs.Tab>
          <span>Bell</span>
        </Tabs.Tab>
        <Tabs.Tab>
          <span>Cog</span>
        </Tabs.Tab>
      </Tabs.TabList>

      <Tabs.TabPanel>
        <h3>Dashboard</h3>
        <p>Welcome to the Dashboard</p>
      </Tabs.TabPanel>
      <Tabs.TabPanel>
        <h3>Comments</h3>
        <p>Welcome to the Comments section</p>
      </Tabs.TabPanel>
      <Tabs.TabPanel>
        <h3>Notifications</h3>
        <p>No Notifications available</p>
      </Tabs.TabPanel>
      <Tabs.TabPanel>
        <h3>Settings</h3>
        <p>No Settings available</p>
      </Tabs.TabPanel>
    </Tabs>
  );
}

export default App;
```

## API Props

### Tabs Component – API Props

| Prop          | Default Value  | Explanation                                                                                                                                                                                |
| ------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `children`    | -              | Required. Should include one `Tabs.TabList` and one or more `Tabs.TabPanel`.                                                                                                               |
| `orientation` | `"horizontal"` | optional. Defines the orientation of the tab. Options: `"horizontal"`, `"vertical"`.                                                                                                       |
| `value`       | `0`            | Required. Index of the active tab. Used to control the selected tab programmatically. Listen to `onTabChange` event on `Tabs.TabList` component to get the active index                    |
| `forceRender` | `false`        | Determines whether all tab panel content is rendered at once. If set to `true`, all content will be rendered and hidden as needed. Otherwise, only the active panel's content is rendered. |

### Tabs.TabList Component - API Props

| Prop             | Default Value | Explanation                                                                                                                                                     |
| ---------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children`       | -             | Required. Should include one or more `Tabs.Tab` components.                                                                                                     |
| `type`           | `"line"`      | Optional. Defines the style of the tab list. Options: `"card"`, `"line"`, or `"segment"`.                                                                       |
| `className`      | `"tab-list"`  | Optional. Custom class name for styling the tab list container.                                                                                                 |
| `justifyContent` | `"start"`     | Optional. Aligns tab items. Works only when `type` is `"line"`. Options: `"space-between"`, `"space-around"`, `"space-evenly"`, `"start"`, `"center"`, `"end"`. |
| `size`           | `"medium"`    | Optional. Size of the tab buttons. Options: `"small"`, `"medium"`, `"large"`.                                                                                   |
| `onTabChange`    | `() => void`  | Required. Event triggered when the active tab changes. Receives the tab index as an argument.                                                                   |

### Tabs.Tab Component - API Props

| Prop        | Default Value | Explanation                                                               |
| ----------- | ------------- | ------------------------------------------------------------------------- |
| `disabled`  | `false`       | Optional. Disables the tab if set to `true`. Prevents selection on click. |
| `className` | `"tab-item"`  | Optional. Custom class for styling the individual tab.                    |
| `children`  | -             | Required. React element to render tab label, icon, or any custom content. |

### Tabs.TabPanel Component - API Props

| Prop        | Default Value | Explanation                                                  |
| ----------- | ------------- | ------------------------------------------------------------ |
| `children`  | -             | Required. React element to display in the panel.             |
| `className` | `"tab-panel"` | Optional. Custom class for styling the individual tab panel. |

## 🛣️ Roadmap

- [✅] Vertical Orientation Support – Add support for vertical tab layouts

- [ ] RTL Support – Enable compatibility for RTL languages (e.g. Arabic, Hebrew)

- [ ] Enhanced Animations & Transitions – Add smooth tab-switch animations
