import { useState } from 'react';
import Listbox from './components/list-box';
import './App.scss';

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

const Options2 = [
  { id: 11, label: 'Mexico', value: 'mx' },
  { id: 12, label: 'Italy', value: 'it' },
  { id: 13, label: 'South Korea', value: 'kr' },
  { id: 14, label: 'Russia', value: 'ru' },
  { id: 15, label: 'South Africa', value: 'za' },
  { id: 16, label: 'Spain', value: 'es' },
  { id: 17, label: 'Netherlands', value: 'nl' },
  { id: 18, label: 'Sweden', value: 'se' },
  { id: 19, label: 'Norway', value: 'no' },
  { id: 20, label: 'Argentina', value: 'ar' },
];

function App() {
  const [value, setValue] = useState('us');
  const [country, setCountry] = useState(Options);

  const addCountries = () => {
    const option = Options2.shift();
    if (option) {
      setCountry(prev => [...prev, option]);
    }
  };

  // const renderOption = (option: any) => {
  //   const { selected, label, value } = option;
  //   const flagUrl = `https://flagcdn.com/w20/${value}.png`;
  //   return (
  //     <div className={`custom-option ${selected ? 'selected' : ''}`.trimEnd()}>
  //       <img src={flagUrl} alt={value} width={16} />
  //       <span>{label}</span>
  //     </div>
  //   );
  // };

  // const renderValue = (label: string, value: string) => {
  //   const flagUrl = `https://flagcdn.com/w20/${value}.png`;
  //   return (
  //     <div className="custom-value">
  //       <img src={flagUrl} alt={value} width={16} />
  //       <span>{label}</span>
  //     </div>
  //   );
  // };

  return (
    <div className="app">
      <button type="button" onClick={addCountries}>
        Add country
      </button>
      <Listbox value={value} label="Select a country" onChange={setValue}>
        {country.map(option => (
          <Listbox.Option
            key={option.id}
            label={option.label}
            value={option.value}
          />
        ))}
      </Listbox>
    </div>
  );
}

export default App;
