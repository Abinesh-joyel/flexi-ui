type TabType = 'line' | 'segment' | 'card';

type TabSize = 'small' | 'medium' | 'large';

type JustifyContent =
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'start'
  | 'center'
  | 'end';

type Orientation = 'horizontal' | 'vertical';

export interface TabsProps {
  children: React.ReactNode;
  orientation?: Orientation;
  value?: number;
}
export interface TabListProps {
  children: React.ReactNode;
  type?: TabType;
  justifyContent?: JustifyContent;
  size?: TabSize;
  orientation?: Orientation;
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
  className?: string;
}
