import Head from 'next/head'
import Navbar from '../components/Navbar'
import HomyApp from '../components/HomyApp';
import React from 'react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Homy App | Anton Stallbörger</title>
        <meta name="description" content="Digital Product Designer and Developer" />
        <meta 
        property="og:image" 
        content="https://www.antonstallboerger.com/assets/og/og_homy.png" 
        />
        <meta 
        name="twitter:image" 
        content="https://www.antonstallboerger.com/assets/og/og_homy.png" 
        />
        <meta name="theme-color" content="#FFFFFF"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <HomyApp />
      
      </div>
  )
}
