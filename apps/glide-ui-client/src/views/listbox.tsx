import ListboxBasic from '../components/listbox/listbox-basic';
import '@glide-ui/react-listbox/style.css';
const ListBoxView = () => {
  return (
    <div className="views">
      <h2>@glide-ui/react-tabs</h2>
      <div className="view">
        <h3 className="mb-3">Basic Usage of Listbox Component</h3>
        <p className="mb-3">
          Simple example of selecting values from a listbox
        </p>
        <ListboxBasic />
      </div>
    </div>
  );
};

export default ListBoxView;
