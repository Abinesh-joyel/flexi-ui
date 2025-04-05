import { useState } from "react";
import Tabs from "./components/tabs";

function App() {
  const [activeTab, setActiveTab] = useState(0);

  const onSelectedTab = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="app">
      <Tabs defaultValue={0} value={activeTab}>
        <Tabs.TabList onTabChange={onSelectedTab} className="tab-list">
          <Tabs.Tab className="tab-item">
            <i className="fa fa-eye"></i> {/* Icon from font-awesome V6 */}
            <span className="label">Eye</span>
          </Tabs.Tab>
          <Tabs.Tab className="tab-item">
            <i className="fa fa-comments"></i>
            <span className="label">Comments</span>
          </Tabs.Tab>
          <Tabs.Tab className="tab-item">
            <i className="fa fa-bell"></i>
            <span className="label">Bell</span>
          </Tabs.Tab>
          <Tabs.Tab className="tab-item">
            <i className="fa fa-cog"></i>
            <span className="label">Cog</span>
          </Tabs.Tab>
        </Tabs.TabList>

        <Tabs.TabPanel>
          <h3>Dashboard</h3>
          <p>Welcome to the Dashboard</p>
        </Tabs.TabPanel>

        <Tabs.TabPanel>
          <h3>Comments</h3>
          <p>Welcome to the Comments section</p>
        </Tabs.TabPanel>

        <Tabs.TabPanel>
          <h3>Notifications</h3>
          <p>No Notfications available</p>
        </Tabs.TabPanel>

        <Tabs.TabPanel>
          <h3>Settings</h3>
          <p>No Settings available</p>
        </Tabs.TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
