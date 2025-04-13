import TabBasic from '../components/tabs/tabs-basic';
import '@glide-ui/react-tabs/style.css';

const TabsView = () => {
  return (
    <div className="views">
      <h2>@glide-ui/react-tabs</h2>
      <div className="view">
        <h3 className="mb-3">Basic Usage of Tabs Component</h3>
        <p className="mb-3">
          A quick example of <b>@glide-ui/react-tabs</b> with customizable{' '}
          <b>orientation</b>, <b>size</b>, <b>type</b>, and <b>justify</b> props
          to match your design needs.
        </p>
        <TabBasic />
      </div>
    </div>
  );
};

export default TabsView;
