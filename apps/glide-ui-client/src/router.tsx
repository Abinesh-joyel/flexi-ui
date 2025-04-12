import { createBrowserRouter } from 'react-router-dom';
import TabsView from './views/tabs';
import ListBoxView from './views/listbox';

export default createBrowserRouter([
  {
    path: '/',
    Component: TabsView,
  },
  {
    path: '/listbox',
    Component: ListBoxView,
  },
]);
