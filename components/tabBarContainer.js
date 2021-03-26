import { useState } from "react";
import TabBar from "./TabBar";

export default function TabContainer(props) {
  const { tabs = [{ name: null }] } = props;
  const firstTab = tabs[0];
  const [currentTab, setTab] = useState(firstTab.name);
  onTabClick = (name) => {
    setTab(name);
  };
  const { tabs, ...otherProps } = props;
  const { currentTab } = this.state;
  return (
    <TabBar
      {...otherProps}
      currentTab={currentTab}
      onTabClick={this.onTabClick}
      tabs={tabs}
    />
  );
}
