import React from 'react';
import Option from './option';

interface ListboxExtend {
  Option: React.FC<any>;
}

const Listbox: React.FC<any> & ListboxExtend = () => {
  return (
    <div className="glide-ui-listbox">
      <Option />
    </div>
  );
};

Listbox.Option = Option;
export default Listbox;
