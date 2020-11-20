// redux wrapper for app
import React from "react";
import { initializeStore } from "./store";

const isServer = typeof window === "undefined";
const __STORE__ = "__STORE__";

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initializeStore(initialState);
  }

  // Create store if unavailable on the client and set it on the window object
  if (!window[__STORE__]) {
    window[__STORE__] = initializeStore(initialState);
  }

  return window[__STORE__];
}

const WithRedux = (App) => {
  return class AppWithRedux extends React.Component {
    constructor(props) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    static async getInitialProps(appContext) {
      let reduxInitialState = {};
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore = getOrCreateStore(reduxInitialState);

      // Provide the store to getInitialProps of pages
      appContext.ctx.reduxStore = reduxStore;

      let appProps = {};
      if (typeof App.getInitialProps === "function") {
        appProps = await App.getInitialProps(appContext);
      }

      return {
        ...appProps,
        initialReduxState: reduxStore.getState(),
      };
    }

    render() {
      return <App {...this.props} reduxStore={this.reduxStore} />;
    }
  };
};

export default WithRedux;
