import { useState } from 'react';
import Listbox from '@glide-ui/react-listbox';
import { COMPONENT_PATH } from '../../constants';

const Options = [
  { id: 1, label: 'United States', value: 'us' },
  { id: 2, label: 'Canada', value: 'ca' },
  { id: 3, label: 'United Kingdom', value: 'un' },
  { id: 4, label: 'Australia', value: 'au' },
  { id: 5, label: 'India', value: 'in' },
  { id: 6, label: 'Germany', value: 'de' },
  { id: 7, label: 'France', value: 'fr' },
  { id: 8, label: 'Japan', value: 'jp' },
  { id: 9, label: 'China', value: 'cn' },
  { id: 10, label: 'Brazil', value: 'br' },
];

const ListboxBasic = () => {
  const [value, setValue] = useState('');
  return (
    <div className="card">
      <div className="card-content">
        <div className="form-group">
          <div className="form-control radio-group">
            <input disabled type="checkbox" id="multiple" name="multiple" />
            <label htmlFor="multiple">Multiple</label>
          </div>
        </div>

        <Listbox value={value} label="Select a country" onChange={setValue}>
          {Options.map(option => (
            <Listbox.Option
              key={option.id}
              value={option.value}
              label={option.label}
            >
              {option.label}
            </Listbox.Option>
          ))}
        </Listbox>
      </div>
      <div className="card-footer">
        <a href={`${COMPONENT_PATH}listbox/listbox-basic.tsx`} target="_blank">
          Code Link
        </a>
      </div>
    </div>
  );
};

export default ListboxBasic;
