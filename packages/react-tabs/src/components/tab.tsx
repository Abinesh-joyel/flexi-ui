import React from 'react';
import { TabProps } from '../types';

const Tab = React.forwardRef<HTMLButtonElement, TabProps>((props, ref) => {
  const {
    children,
    index,
    activeTabIndex,
    disabled = false,
    className = 'tab-item',
    onTabChange = () => {},
  } = props;
  const isActive = activeTabIndex === index;
  const tabIndex = isActive ? 0 : -1;
  const id = `glide-ui-tab-${index}`; // make sure this id is unique and reference to the tabpanel aria-labelledby
  const control = `glide-ui-tabpanel-${index}`; // make sure this id is unique and reference to the tabpanel id
  const onSelected = () => {
    onTabChange(index as number);
  };
  return (
    <button
      id={id}
      ref={ref}
      role="tab"
      type="button"
      data-testid="tab"
      aria-controls={control}
      tabIndex={tabIndex}
      disabled={disabled}
      aria-selected={isActive}
      aria-disabled={disabled}
      className={`glide-ui-tab-item ${className}`}
      onClick={onSelected}
    >
      <span className="tab-item-text">{children}</span>
      <span className="tab-item-indicator"></span>
    </button>
  );
});

export default Tab;
