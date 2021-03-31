import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import App from "./components/app/app";
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
);
