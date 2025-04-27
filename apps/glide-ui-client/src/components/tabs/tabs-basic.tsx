import { memo, useState } from 'react';
import Tabs from '@glide-ui/react-tabs';
import { COMPONENT_PATH } from '../../constants';

type Type = 'line' | 'segment' | 'card';
type Size = 'small' | 'medium' | 'large';
type JustifyContent =
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'start'
  | 'center'
  | 'end';
type Orientation = 'horizontal' | 'vertical';

const TabBasic = () => {
  const [type, setType] = useState<Type>('line');
  const [size, setSize] = useState<Size>('medium');
  const [justifyContent, setJustifyContent] = useState<JustifyContent>('start');
  const [orientation, setOrientation] = useState<Orientation>('horizontal');
  const [activeTab, setActiveTab] = useState(0);

  const onSelectedTab = (index: number) => {
    setActiveTab(index);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'orientation') {
      setOrientation(value as Orientation);
    } else if (name === 'type') {
      setType(value as Type);
    } else if (name === 'size') {
      setSize(value as Size);
    } else {
      setJustifyContent(value as JustifyContent);
    }
  };

  return (
    <div className="card">
      <div className="card-content">
        <div className="form-group">
          <div className="form-control radio-group">
            <h4>Orientation:</h4>
            <div className="radio-orientation radio-horizontal">
              <input
                type="radio"
                name="orientation"
                id="horizontal"
                value="horizontal"
                defaultChecked
                onChange={handleChange}
              />
              <label htmlFor="horizontal">Horizontal</label>
            </div>
            <div className="radio-orientation radio-horizontal">
              <input
                type="radio"
                name="orientation"
                id="vertical"
                value="vertical"
                onChange={handleChange}
              />
              <label htmlFor="vertical">Vertical</label>
            </div>
          </div>
          <div className="form-control radio-group">
            <h4>Type:</h4>
            <div className="radio-type radio-horizontal">
              <input
                type="radio"
                name="type"
                id="line"
                value="line"
                defaultChecked
                onChange={handleChange}
              />
              <label htmlFor="line">Line</label>
            </div>
            <div className="radio-type radio-horizontal">
              <input
                type="radio"
                id="segment"
                name="type"
                value="segment"
                onChange={handleChange}
              />
              <label htmlFor="segment">Segment</label>
            </div>
            <div className="radio-type radio-horizontal">
              <input
                type="radio"
                id="card"
                name="type"
                value="card"
                onChange={handleChange}
              />
              <label htmlFor="card">Card</label>
            </div>
          </div>
          <div className="form-control radio-group">
            <h4>Size:</h4>
            <div className="radio-size radio-horizontal">
              <input
                type="radio"
                id="small"
                name="size"
                value="small"
                onChange={handleChange}
              />
              <label htmlFor="small">Small</label>
            </div>
            <div className="radio-size radio-horizontal">
              <input
                type="radio"
                id="medium"
                name="size"
                value="medium"
                defaultChecked
                onChange={handleChange}
              />
              <label htmlFor="medium">Medium</label>
            </div>
            <div className="radio-size radio-horizontal">
              <input
                type="radio"
                id="large"
                name="size"
                value="large"
                onChange={handleChange}
              />
              <label htmlFor="large">Large</label>
            </div>
          </div>
          <div className="form-control">
            <div className="radio-group">
              <h4>Justify content:</h4>
              <div className="radio-justify radio-horizontal">
                <input
                  type="radio"
                  id="start"
                  name="justify"
                  value="start"
                  defaultChecked
                  onChange={handleChange}
                />
                <label htmlFor="start">Start</label>
              </div>
              <div className="radio-justify radio-horizontal">
                <input
                  type="radio"
                  id="center"
                  name="justify"
                  value="center"
                  onChange={handleChange}
                />
                <label htmlFor="center">Center</label>
              </div>
              <div className="radio-justify radio-horizontal">
                <input
                  type="radio"
                  id="end"
                  name="justify"
                  value="end"
                  onChange={handleChange}
                />
                <label htmlFor="end">End</label>
              </div>
              <div className="radio-justify radio-horizontal">
                <input
                  type="radio"
                  id="space-between"
                  name="justify"
                  value="space-between"
                  onChange={handleChange}
                />
                <label htmlFor="space-between">Space Between</label>
              </div>
              <div className="radio-justify radio-horizontal">
                <input
                  type="radio"
                  id="space-around"
                  name="justify"
                  value="space-around"
                  onChange={handleChange}
                />
                <label htmlFor="space-around">Space Around</label>
              </div>
              <div className="radio-justify radio-horizontal">
                <input
                  type="radio"
                  id="space-evenly"
                  name="justify"
                  value="space-evenly"
                  onChange={handleChange}
                />
                <label htmlFor="space-evenly">Space Evenly</label>
              </div>
            </div>
            <small className="radio-note">
              Only works if tab type is line and orientation horizontal
            </small>
          </div>
        </div>

        <Tabs value={activeTab} orientation={orientation}>
          <Tabs.TabList
            type={type}
            size={size}
            justifyContent={justifyContent}
            onTabChange={onSelectedTab}
          >
            <Tabs.Tab>Eye</Tabs.Tab>
            <Tabs.Tab>Comments</Tabs.Tab>
            <Tabs.Tab>Bell</Tabs.Tab>
            <Tabs.Tab>Cog</Tabs.Tab>
          </Tabs.TabList>

          <Tabs.TabPanel>
            <h3>Dashboard</h3>
          </Tabs.TabPanel>

          <Tabs.TabPanel>
            <h3>Comments</h3>
          </Tabs.TabPanel>

          <Tabs.TabPanel>
            <h3>Notifications</h3>
          </Tabs.TabPanel>

          <Tabs.TabPanel>
            <h3>Settings</h3>
          </Tabs.TabPanel>
        </Tabs>
      </div>
      <div className="card-footer">
        <a href={`${COMPONENT_PATH}tabs/tabs-basic.tsx`} target="_blank">
          Code Link
        </a>
      </div>
    </div>
  );
};

export default memo(TabBasic);
