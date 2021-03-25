import { useState } from "react";
import "semantic-ui-css/semantic.css";
import { Header, Container, Menu } from "semantic-ui-react";

export default function Sample() {
  const [activeTab, setactiveTab] = useState("unitInfo");
  const tabs = [
    { name: "unitInfo", label: "Unit Info" },
    { name: "pilots", label: "Pilots" },
    { name: "mechs", label: "Mechs" },
    { name: "unitOrganization", label: "Unit Organization" },
  ];
  return (
    <div className="App">
      <div className="App-header">
        <Header inverted as="h1">
          Project Mini-Mek
        </Header>
      </div>
      <Container>
        <Menu tabular size="massive">
          {tabs.map(({ name, label }) => {
            return (
              <Menu.Item name={name} active={name === activeTab ? true : false}>
                {label}
              </Menu.Item>
            );
          })}
        </Menu>
      </Container>
    </div>
  );
}
