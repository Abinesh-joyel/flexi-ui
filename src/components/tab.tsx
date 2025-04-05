import React from 'react';
import { TabProps } from '../types';

const Tab = React.forwardRef<HTMLButtonElement, TabProps>((props, ref) => {
  const {
    children,
    index,
    activeTabIndex,
    disabled = false,
    className = 'tab-list__tab-item',
    onTabChange = () => {},
  } = props;
  const isActive = activeTabIndex === index;
  const tabIndex = isActive ? 0 : -1;
  const id = `tabpanel-${index}`;
  const onSelected = () => {
    onTabChange(index as number);
  };
  return (
    <button
      ref={ref}
      role="tab"
      type="button"
      data-testid="tab"
      aria-controls={id}
      tabIndex={tabIndex}
      disabled={disabled}
      aria-selected={isActive}
      aria-disabled={disabled}
      className={`tab-list__tab ${className}`}
      onClick={onSelected}
    >
      {children}
      <span className="tab-list__indicator"></span>
    </button>
  );
});

export default Tab;
