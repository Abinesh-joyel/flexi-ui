import React, { Children, useRef } from 'react';
import Tab from './tab';
import usekeyBoardEvent from '../hooks/useKeyBoardEvent';
import { TabListProps } from '../types';

const TabList: React.FC<TabListProps> = props => {
  const {
    children,
    activeTabIndex,
    type = 'line',
    size = 'medium',
    className = 'tab-list',
    justifyContent = 'start',
    orientation = 'horizontal',
    onTabChange = () => {},
  } = props;

  const tabRef = useRef<(HTMLButtonElement | null)[]>([]);
  const totalTabs = Children.count(children);
  const { handleKeyDown } = usekeyBoardEvent(
    activeTabIndex as number,
    totalTabs,
    orientation,
    (index: number) => {
      onTabChange(index);
      tabRef.current[index]?.focus();
    }
  );

  const renderChild = (child: React.ReactNode, index: number) => {
    const childElement = child as React.ReactElement;
    if (!React.isValidElement(child) || childElement.type !== Tab) {
      return null;
    }
    const tabId = `tab-${index}`;
    return React.cloneElement(child as React.ReactElement, {
      key: tabId,
      ref: (el: HTMLButtonElement) => (tabRef.current[index] = el),
      index,
      activeTabIndex,
      onTabChange,
    });
  };

  return (
    <div
      className={`glide-ui-tab-list tab-type-${type} ${justifyContent} ${size} ${className}`}
      role="tablist"
      data-testid="tab-list"
      aria-orientation={orientation}
      onKeyDown={handleKeyDown}
    >
      {Children.map(children, renderChild)}
    </div>
  );
};

export default TabList;
