import { Provider } from "react-redux";
import configureStore from "../state/store";
import "semantic-ui-css/semantic.css";

const store = configureStore();

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
