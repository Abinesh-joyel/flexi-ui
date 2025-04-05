import { TabPanelProps } from "../types";

const TabPanel: React.FC<TabPanelProps> = (props) => {
  const { children, tabPanelId, isActive } = props;
  return (
    <div
      className="tab-panels__tab-panel"
      role="tabPanel"
      id={tabPanelId}
      aria-hidden={!isActive}
      tabIndex={0}
    >
      {children}
    </div>
  );
};

export default TabPanel;
