import { Routes, Route, NavLink } from 'react-router-dom';

import TabsView from './views/tabs';
import ListBoxView from './views/listbox';
import { navItems } from './router';
import './App.scss';

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
                  <NavLink to={navItem.path}>{navItem.name}</NavLink>
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
