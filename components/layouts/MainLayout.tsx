

import Head from "next/head";
import React, { FC } from "react";
import NavBar from "../NavBar";
import styles from "./MainLayout.module.css";

interface Props {
  children : React.ReactNode
}

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>

      <Head>
        <title>Paloma Salazar Contigo</title>
        <meta name="description" content="Nutricion" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className={styles.main}>

        {children}

      </main>
    </div>
  )
}

export default MainLayout