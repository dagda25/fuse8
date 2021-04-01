import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import App from "./components/app/app";
import Header from './components/header/header';
import store from "./store/store";
import {fetchData} from "./store/api-actions";


store.dispatch(fetchData())
  .then(
      ReactDOM.render(
          <Provider store={store}>
            <App/>
          </Provider>,
          document.querySelector(`#root`)
      )
  )
  .catch(() => {
    ReactDOM.render(
        <Header title="Network Error. Please try again later"/>,
        document.querySelector(`#root`)
    );
  }
  );

