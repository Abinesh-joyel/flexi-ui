import { TabPanelProps } from '../types';

const TabPanel: React.FC<TabPanelProps> = props => {
  const {
    children,
    isActive,
    index,
    forceRender,
    className = 'tab-panel',
  } = props;
  const id = `glide-ui-tabpanel-${index}`;
  const labelledby = `glide-ui-tab-${index}`;
  return (
    <div
      id={id}
      tabIndex={0}
      role="tabpanel"
      data-testid="tab-panel"
      aria-hidden={!isActive}
      aria-labelledby={labelledby}
      className={`glide-ui-tab-panel ${className}`}
    >
      {forceRender || isActive ? children : null}
    </div>
  );
};

export default TabPanel;
