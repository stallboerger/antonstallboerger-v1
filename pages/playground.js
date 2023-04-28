import Head from 'next/head'
import Navbar from '../components/Navbar'
import React from 'react';
import Playground from '../components/Playground';

export default function Home() {
  return (
    <div>
      <Head>
      <title>Playground | Anton Stallbörger</title>
        <meta name="description" content="Digital Product Designer and Developer" />
        <meta 
        property="og:image" 
        content="https://www.antonstallboerger.com/assets/og/og_playground.png" 
        />
        <meta 
        name="twitter:image" 
        content="https://www.antonstallboerger.com/assets/og/og_playground.png" 
        />
        <meta name="theme-color" content="#FFFFFF"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Playground />
      
      </div>
  )
}
