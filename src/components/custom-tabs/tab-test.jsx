import Tabs from "./tabs";
import './tabs.css';

function RandomComponent() {
  return (
    <div>
      <p>random tab content<span style={{color:"green"}}> jayyu the coder</span></p>
      <p>random tab</p>
  
    </div>
  );
}

export default function TabTest() {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>This is content for Tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is content for Tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];

  function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }

  return <Tabs tabsContent={tabs} onChange={handleChange} />;
}
