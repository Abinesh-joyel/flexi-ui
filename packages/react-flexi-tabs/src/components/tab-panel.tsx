import { TabPanelProps } from '../types';

const TabPanel: React.FC<TabPanelProps> = props => {
  const { children, tabPanelId, isActive } = props;
  return (
    <div
      tabIndex={0}
      role="tabPanel"
      id={tabPanelId}
      data-testid="tab-panel"
      aria-hidden={!isActive}
      className="tab-panels__tab-panel"
    >
      {children}
    </div>
  );
};

export default TabPanel;
