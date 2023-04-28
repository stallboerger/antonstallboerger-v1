import Head from 'next/head'
import Navbar from '../components/Navbar'
import React from 'react';
import Colophon from '../components/Colophon';

export default function Home() {
  return (
    <div>
      <Head>
      <title>Colophon | Anton Stallbörger</title>
        <meta name="description" content="Digital Product Designer and Developer" />
        <meta 
        property="og:image" 
        content="https://www.antonstallboerger.com/assets/og/og_colophon.png" 
        />
        <meta 
        name="twitter:image" 
        content="https://www.antonstallboerger.com/assets/og/og_colophon.png" 
        />
        <meta name="theme-color" content="#FFFFFF"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Colophon />
      
      </div>
  )
}
