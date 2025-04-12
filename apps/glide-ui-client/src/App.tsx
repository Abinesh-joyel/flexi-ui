import { Link, Routes, Route } from 'react-router-dom';

import TabsView from './views/tabs';
import ListBoxView from './views/listbox';

import './App.scss';

const navItems = [
  {
    id: 'tabs',
    name: 'Tabs',
    path: '/',
  },
  {
    id: 'listbox',
    name: 'Listbox',
    path: '/listbox',
  },
];

function App() {
  return (
    <div className="app">
      <main>
        <aside className="sidebar">
          <h2>Glide UI</h2>
          <nav>
            <ul>
              {navItems.map(navItem => (
                <li key={navItem.id}>
                  <Link to={navItem.path}>{navItem.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <section className="main-content">
          <Routes>
            <Route path="/" Component={TabsView} />
            <Route path="/listbox" Component={ListBoxView} />
          </Routes>
        </section>
      </main>
    </div>
  );
}

export default App;
