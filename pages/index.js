import Head from "next/head";
import styles from "../styles/Home.module.css";
import { connect } from "react-redux";
import { fetchApi } from "../redux/modules/posts/actions";

const HomePage = ({ posts, dispatch }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Redux Skeleton</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Ready to use</h1>
        <p>
          On this section bellow is an example of a Github api call from the
          client or server side, and save result to Redux store.
        </p>
        <p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              dispatch(fetchApi());
              setTimeout(() => {
                // simulate done api request

                // sample dummy response from api
                const response = { status: 200, message: "success" };

                //sample call api ad fill redux store on server side
                dispatch(fetchApi(response));
              }, 1500);
            }}
          >
            Click to recall API
          </a>
        </p>
        <p>
          {!posts.response || posts.is_loading ? (
            <span style={{ color: "F4F4F4" }}>loading...</span>
          ) : (
            JSON.stringify(posts.response)
          )}
        </p>
      </main>

      <footer className={styles.footer}>
        <a href="https://github.com/yussan/next-redux-skeleton">
          Collaboration here
        </a>
      </footer>
    </div>
  );
};

HomePage.getInitialProps = async ({ req, query, reduxStore }) => {
  if (req) {
    // sample dummy response from api
    const response = { status: 200, message: "success" };

    //sample call api ad fill redux store on server side
    await reduxStore.dispatch(fetchApi(response));
  }
  return {
    query,
  };
};

export default connect((state) => {
  return {
    posts: state.Posts,
  };
})(HomePage);
