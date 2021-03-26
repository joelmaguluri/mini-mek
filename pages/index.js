import "semantic-ui-css/semantic.css";
import { Header, Container } from "semantic-ui-react";
import TabBarContainer from '../components/tabBarContainer'

export default function Main() {
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
        <TabBarContainer tabs={tabs} size="massive" />
      </Container>
    </div>
  );
}
