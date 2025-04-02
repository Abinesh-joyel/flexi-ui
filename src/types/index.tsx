interface TabsProps {
  children: React.ReactNode;
  defaultValue: number;
  value?: number;
}

type TabType = "line" | "segment" | "card";

type TabSize = "small" | "medium" | "large";

type JustifyContent =
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "start"
  | "center"
  | "end";

interface TabListProps {
  children: React.ReactNode;
  type?: TabType;
  justifyContent?: JustifyContent;
  size?: TabSize;
  activeTabIndex?: number;
  className?: string;
  onTabChange?: (index: number) => void;
}

interface TabProps {
  children: React.ReactNode;
  id: string;
  index?: number;
  className?: string;
  disabled?: boolean;
  activeTabIndex?: string;
  onTabChange?: (index: number) => void;
}

interface TabPanelProps {
  children: React.ReactNode;
  id: string;
  isActive?: boolean;
}
