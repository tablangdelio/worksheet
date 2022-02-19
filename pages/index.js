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
      <main className='main'>
         <h1 className='text-3xl'>
             Worksheet Technical section 
         </h1>
         <h5>Delio Tablang Jr</h5>
         <div className="mt-5">
                <code className='bg-stone-900 text-orange-500 mt-7 p-1'> 
                <a 
                    target="_blank" 
                    href="https://github.com/tablangdelio/worksheet">         
                      https://github.com/tablangdelio/worksheet
                </a>
                </code>
          </div>
      </main>
    
    </div>
  );
}
