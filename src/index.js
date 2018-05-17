import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from "react-redux";

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { categoryFetched } from "./actions";
import { store } from "./store";


const mapStateToProps = (state) => {
  return {
    category: state.category
  }
};
const mapDispatchToProps = { categoryFetched };

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);


ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('root'),
);
registerServiceWorker();
