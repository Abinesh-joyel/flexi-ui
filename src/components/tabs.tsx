import React, { Children } from "react";
import TabPanel from "./tab-panel";
import TabList from "./tab-list";
import Tab from "./tab";

import "../scss/style.scss";

const Tabs: React.FC<TabsProps> & {
  TabPanel: React.FC<TabPanelProps>;
  TabList: React.FC<TabListProps>;
  Tab: React.FC<TabProps>;
} = (props) => {
  const { children, defaultValue, value } = props;

  const activeTabIndex = value ?? defaultValue ?? 0;

  const [tabsListChild, ...restChild] = Children.toArray(children);
  return (
    <div className="flexi-tabs">
      {React.cloneElement(tabsListChild as React.ReactElement, {
        activeTabIndex,
      })}

      <div className="flexi-tabs__tab-panels">
        {restChild.map((child, index) => {
          const childElement = child as React.ReactElement;
          const tabId = childElement.props.id || `tab-${index}`;
          const isActive = index === activeTabIndex;
          return React.cloneElement(childElement, { key: tabId, isActive });
        })}
      </div>
    </div>
  );
};

Tabs.TabPanel = TabPanel;
Tabs.TabList = TabList;
Tabs.Tab = Tab;

export default Tabs;
