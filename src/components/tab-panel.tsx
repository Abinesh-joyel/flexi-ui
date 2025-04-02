import { memo } from "react";

const TabPanel: React.FC<TabPanelProps> = (props) => {
  const { children, isActive, id } = props;
  return (
    <div
      className="tab-panels__tab-panel"
      role="tabPanel"
      id={id}
      aria-hidden={!isActive}
      tabIndex={0}
    >
      {children}
    </div>
  );
};

export default memo(TabPanel, (prevProps, nextProps) => {
  return prevProps.isActive === nextProps.isActive;
});
