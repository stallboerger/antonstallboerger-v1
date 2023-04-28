import Head from 'next/head'
import Navbar from '../components/Navbar'
import About from '../components/About';
import React from 'react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>About | Anton Stallbörger</title>
        <meta name="description" content="Digital Product Designer and Developer" />
        <meta 
        property="og:image" 
        content="https://antonstallboerger.com/assets/og/og_about.png" 
        />
        <meta 
        name="twitter:image" 
        content="https://antonstallboerger.com/assets/og/og_about.png" 
        />
        <meta name="theme-color" content="#FFFFFF"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <About />
      
      </div>
  )
}
