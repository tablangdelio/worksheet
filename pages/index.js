import React, { useState }  from 'react' 
import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title> Worksheet </title>
        <meta name="description" content="worksheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
         <div>
             Worksheet Technical section 
         </div>
      </main>
    </div>
  );
}
