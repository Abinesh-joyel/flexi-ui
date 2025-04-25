import { useState } from 'react';
import './App.scss';

function App() {
  const [count] = useState(0);

  return <div>react-listbox {count}</div>;
}

export default App;
