export interface TabsProps {
  children: React.ReactNode;
  value?: number;
}

type TabType = 'line' | 'segment' | 'card';

type TabSize = 'small' | 'medium' | 'large';

type JustifyContent =
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'start'
  | 'center'
  | 'end';

export interface TabListProps {
  children: React.ReactNode;
  type?: TabType;
  justifyContent?: JustifyContent;
  size?: TabSize;
  activeTabIndex?: number;
  className?: string;
  onTabChange?: (index: number) => void;
}

export interface TabProps {
  children: React.ReactNode;
  index?: number;
  className?: string;
  disabled?: boolean;
  activeTabIndex?: string;
  onTabChange?: (index: number) => void;
}

export interface TabPanelProps {
  children: React.ReactNode;
  index?: number;
  isActive?: boolean;
}
