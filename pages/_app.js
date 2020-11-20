import "../styles/globals.css";
import { Provider } from "react-redux";
import WithRedux from "../redux/withRedux";

function MyApp(props) {
  const { pageProps, Component, reduxStore } = props;
  return (
    <Provider store={reduxStore}>
      <Component {...pageProps} />
    </Provider>
  );
}

MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};

  //Anything returned here can be access by the client
  return { pageProps };
};

export default WithRedux(MyApp);
