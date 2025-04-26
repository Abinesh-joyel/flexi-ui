export interface Option {
  id: number;
  label: string;
  value: string;
}

export interface ListboxProps {
  value: string;
  label: string;
  options?: Option[];
  children?: React.ReactNode;
  renderOption?: (option: Option, index: number) => React.ReactNode;
  renderValue?: (label: string, value: string) => React.ReactNode;
  onChange: (value: string) => void;
}

export interface ListboxOptionProps {
  label: string;
  value: string;
  children?: React.ReactNode;
  selected?: boolean;
  disabled?: boolean;
  onSelected?: (value: string) => void;
}
