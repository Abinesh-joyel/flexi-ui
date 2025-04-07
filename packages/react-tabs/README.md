# @glide-ui/react-tabs

**@glide-ui/react-tabs** is a lightweight, highly customizable **tab component library** for **React**. It provides a **flexible API** for building tab-based navigation systems with multiple styles, including **line-based tabs, segment-based tabs, and card-style tabs**. The library is built using **accessibility (ARIA-compliant)** in mind.

## 🚀 Features

- ✅ **Customizable** – Easily style tabs using class-based or BEM-style selectors.
- ✅ **Multiple Styles** – Supports **line, segment, and card-based tabs** out of the box.
- ✅ **Accessible (ARIA Support)** – Ensures keyboard and screen-reader compatibility. _(More enhancements coming soon!)_
- ✅ **Composable & Extendable** – Implements the **Compound Component Pattern** for better flexibility.

## 📦 Installation

You can install the library using either `npm` or `yarn`:

```bash
npm install --save @aj-ui/react-flexi-tabs
```

or

```bash
yarn add @aj-ui/react-flexi-tabs
```

## Controlled Tabs Example

```tsx
import React, { useState } from 'react';
import { Tabs } from 'react-flexi-tabs';

function App() {
  const [activeTab, setActiveTab] = useState(0);

  const onSelectedTab = (index: number) => {
    setActiveTab(index);
  };

  return (
    <Tabs value={activeTab}>
      <Tabs.TabList onTabChange={onSelectedTab}>
        <Tabs.Tab>
          <span className="label">Eye</span>
        </Tabs.Tab>
        <Tabs.Tab>
          <span className="label">Comments</span>
        </Tabs.Tab>
        <Tabs.Tab>
          <span className="label">Bell</span>
        </Tabs.Tab>
        <Tabs.Tab>
          <span className="label">Cog</span>
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

| Prop       | Default Value | Explanation                                                                                                                                                             |
| ---------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children` | —             | Required. Should include one `Tabs.TabList` and one or more `Tabs.TabPanel`.                                                                                            |
| `value`    | `0`           | Required. Index of the active tab. Used to control the selected tab programmatically. Listen to `onTabChange` event on `Tabs.TabList` component to get the active index |

### Tabs.TabList Component - API Props

| Prop             | Default Value | Explanation                                                                                                                                                     |
| ---------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children`       | —             | Required. Should include one or more `Tabs.Tab` components.                                                                                                     |
| `type`           | `"line"`      | Optional. Defines the style of the tab list. Options: `"card"`, `"line"`, or `"segment"`.                                                                       |
| `className`      | `"tab-list"`  | Optional. Custom class name for styling the tab list container.                                                                                                 |
| `justifyContent` | `"start"`     | Optional. Aligns tab items. Works only when `type` is `"line"`. Options: `"space-between"`, `"space-around"`, `"space-evenly"`, `"start"`, `"center"`, `"end"`. |
| `size`           | `"small"`     | Optional. Size of the tab buttons. Options: `"small"`, `"medium"`, `"large"`.                                                                                   |
| `onTabChange`    | —             | Required. Event triggered when the active tab changes. Receives the tab index as an argument.                                                                   |

### Tabs.Tab Component - API Props

| Prop        | Default Value          | Explanation                                                               |
| ----------- | ---------------------- | ------------------------------------------------------------------------- |
| `disabled`  | `false`                | Optional. Disables the tab if set to `true`. Prevents selection on click. |
| `className` | `"tab-list__tab-item"` | Optional. Custom class for styling the individual tab.                    |
| `children`  | —                      | Required. React element to render tab label, icon, or any custom content. |

### Tabs.TabPanel Component - API Props

| Prop       | Default Value | Explanation                                      |
| ---------- | ------------- | ------------------------------------------------ |
| `children` | —             | Required. React element to display in the panel. |

## 🛣️ Roadmap

- [x] Vertical Orientation Support – Add support for vertical tab layouts (Currently horizontal only)

- [ ] RTL Support – Enable compatibility for RTL languages (e.g. Arabic, Hebrew)

- [ ] Enhanced Animations & Transitions – Add smooth tab-switch animations
