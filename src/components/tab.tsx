import React from "react";

const Tab = React.forwardRef<HTMLButtonElement, TabProps>((props, ref) => {
  const {
    id,
    children,
    index,
    activeTabIndex,
    disabled = false,
    className = "tab-list__tab-item",
    onTabChange = () => {},
  } = props;
  const isActive = activeTabIndex === index;
  const tabIndex = isActive ? 0 : -1;
  const onSelected = () => {
    onTabChange(index as number);
  };
  return (
    <button
      ref={ref}
      className={`tab-list__tab ${className}`}
      type="button"
      role="tab"
      tabIndex={tabIndex}
      aria-controls={id}
      aria-selected={isActive}
      disabled={disabled}
      onClick={onSelected}
    >
      {children}
      <span className="tab-list__indicator"></span>
    </button>
  );
});

export default Tab;
