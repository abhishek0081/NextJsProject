import Head from "next/head";
import Layout from "../components/layout/layout";
import "../styles/globals.css";
import { NotificationContextProvider } from "../utilities/NotificationContext";

function MyApp({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
    <Layout>
      <Head>
        <meta name="viewport"  content="width=device-width, initial-scale=1.0"/>
      </Head>
      <Component {...pageProps} />
    </Layout>
    </NotificationContextProvider>
  );
}

export default MyApp;
