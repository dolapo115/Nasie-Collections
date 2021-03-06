import type { NextPage } from "next";
import Head from "next/head";
import Login from "../components/Login";
import styles from "../styles/index.module.css";


const Home: any | NextPage = () => {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Nasie Collections</title>
        <link rel="icon" href="/images/logo.jpg" />
      </Head>
      <Login/>
    </div>
  );
  
};

export default Home;

