import React from "react";
import Header from "./Header";
import styles from "../styles/Layout.module.css";

function Layout(props) {
  return (
    <>
      <Header />
      <main className={styles.main}>{props.children}</main>
    </>
  );
}

export default Layout;
