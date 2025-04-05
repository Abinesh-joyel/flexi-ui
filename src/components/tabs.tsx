import React, { Children, isValidElement, cloneElement } from 'react';
import TabPanel from './tab-panel';
import TabList from './tab-list';
import Tab from './tab';
import { TabsProps, TabPanelProps, TabListProps, TabProps } from '../types';
import '../scss/style.scss';

interface TabsExtend {
  TabPanel: React.FC<TabPanelProps>;
  TabList: React.FC<TabListProps>;
  Tab: React.ForwardRefExoticComponent<
    TabProps & React.RefAttributes<HTMLButtonElement>
  >;
}

const Tabs: React.FC<TabsProps> & TabsExtend = props => {
  const { children, value } = props;

  const activeTabIndex = value ?? 0;

  const [tabsListChild, ...restChild] = Children.toArray(children);

  if (!isValidElement(tabsListChild) || tabsListChild?.type !== TabList) {
    throw new Error('Tabs component should have TabList as first child');
  }

  const renderChild = (child: React.ReactNode, index: number) => {
    if (!isValidElement(child) || child?.type !== TabPanel) {
      return null;
    }
    const childElement = child as React.ReactElement;
    const tabPanelId = `tabpanel-${index}`;
    const isActive = index === activeTabIndex;
    return cloneElement(childElement, {
      key: tabPanelId,
      tabPanelId,
      isActive,
    });
  };

  return (
    <div className="flexi-tabs">
      {cloneElement(tabsListChild as React.ReactElement, {
        activeTabIndex,
      })}

      <div className="flexi-tabs__tab-panels">{restChild.map(renderChild)}</div>
    </div>
  );
};

Tabs.TabPanel = TabPanel;
Tabs.TabList = TabList;
Tabs.Tab = Tab;

export default Tabs;
