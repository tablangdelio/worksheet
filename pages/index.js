import React, { useState }  from 'react' 
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TabNavItem from '../components/Tab/TabNavItem'
import TabContent from '../components/Tab/TabContent'

export default function Home() {
  const [activeTab, setActiveTab ] = useState('tab1');
  const tabs = [
    {
      title: "tab1",
      activeTab: activeTab,
      setActiveTab: setActiveTab
    },

    {
      title: "tab2",
      activeTab: activeTab,
      setActiveTab: setActiveTab
    },

    {
      title: "tab3",
      activeTab: activeTab,
      setActiveTab: setActiveTab
    }
  ];

  const tabNav = tabs.map((data, index) => {
      return <TabNavItem id={`tab${index+1}`} title={data.title} activeTab={data.activeTab} setActiveTab={data.setActiveTab} />
  });


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <div className={styles.tabs}>
            <ul className={styles.nav}>
              {tabNav}
            </ul>

            <div className='outlet'>
              <TabContent id='tab1' activeTab={activeTab}>
                Tab 1 
              </TabContent>

              <TabContent id='tab2' activeTab={activeTab}>
                Tab 2 
              </TabContent>

              <TabContent id='tab3' activeTab={activeTab}>
                Tab 3 
              </TabContent>
            </div>
          </div>
       
      </main>
    </div>
  );
}
