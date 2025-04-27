import React, {
  createElement,
  cloneElement,
  useCallback,
  Children,
  useState,
  useMemo,
  useRef,
} from 'react';
import ListboxOption from './listbox-option';
import { useClickAway } from '../hooks/useClickAway';
import { ListboxOptionProps, ListboxProps, Option } from '../types';

interface ListboxExtend {
  Option: React.FC<ListboxOptionProps>;
}

const Listbox: React.FC<ListboxProps> & ListboxExtend = props => {
  const {
    value,
    label,
    children,
    options = [],
    onChange,
    renderValue,
    renderOption,
  } = props;
  const [active, setActive] = useState(false);
  const listboxRef = useRef<HTMLDivElement>(null);

  const isCustomRender =
    typeof renderOption === 'function' && options?.length > 0;
  const isCustomValue = typeof renderValue === 'function' && !!value;

  const toggleListbox = () => {
    setActive(prev => !prev);
  };

  const onSelected = useCallback((value: string) => {
    toggleListbox();
    onChange(value);
  }, []);

  const renderChild = (child: React.ReactNode) => {
    const childElement = child as React.ReactElement;
    const { value: optionValue, id } = childElement.props;
    const selected = value === optionValue;
    return cloneElement(childElement, {
      key: id,
      selected,
      onSelected,
    });
  };

  const renderCustomChild = (option: Option, index: number) => {
    const { value: optionValue, label, id } = option;
    const selected = value === optionValue;
    return createElement(
      ListboxOption,
      { value: optionValue, label, selected, onSelected, key: id },
      (renderOption as Function)({ ...option }, selected, index)
    );
  };

  const renderOptions = useMemo(() => {
    if (Children.count(children) > 0) {
      return Children.map(children, renderChild);
    } else if (isCustomRender) {
      return options.map(renderCustomChild);
    } else {
      return null;
    }
  }, [options, children, value]);

  const labels = useMemo(() => {
    const labelMap: Record<string, string> = {};
    if (!!children && Children.count(children) > 0) {
      Children.forEach(children as React.ReactElement, child => {
        const { value, label } = child.props;
        labelMap[value] = label;
      });
    } else if (isCustomRender) {
      options.forEach((option: Option) => {
        const { value, label } = option;
        labelMap[value] = label;
      });
    } else {
      return labelMap;
    }
    return labelMap;
  }, [options, children]);

  useClickAway(listboxRef, () => setActive(false));

  const renderLabel = isCustomValue
    ? useMemo(() => renderValue(labels[value], value), [value])
    : labels[value] || label;

  return (
    <div className="glide-ui-listbox" ref={listboxRef}>
      <div
        tabIndex={0}
        id="listbox-label"
        className="glide-ui-listbox__label"
        aria-haspopup="listbox"
        aria-expanded={active}
        onClick={toggleListbox}
      >
        {renderLabel}
        <span className="glide-ui-listbox__arrow"></span>
      </div>
      {active && !!renderOptions ? (
        <ul
          tabIndex={0}
          role="listbox"
          aria-multiselectable={false}
          className="glide-ui-listbox__options"
        >
          {renderOptions}
        </ul>
      ) : null}
    </div>
  );
};

Listbox.Option = ListboxOption;
export default Listbox;
