import { ListboxOptionProps } from '../types';
import { noop } from '../utils';

const ListboxOption: React.FC<ListboxOptionProps> = props => {
  const {
    label,
    value,
    children = null,
    selected = false,
    disabled = false,
    onSelected = noop,
  } = props;
  const onChange = () => {
    onSelected(value);
  };

  return (
    <li
      role="option"
      aria-selected={selected}
      aria-disabled={disabled}
      className="glide-ui-listbox__option"
      onClick={onChange}
    >
      {children || label}
    </li>
  );
};

export default ListboxOption;
