import Head from 'next/head'
import Navbar from '../components/Navbar'
import About from '../components/About';
import React from 'react';

export default function Home() {
  return (
    <div>
      <Head>
      <title>About | Anton Stallbörger</title>
        <meta 
          name="description" 
          content="Digital Product Designer and Developer" 
        />
        <meta 
          property="og:image" 
          content="https://www.antonstallboerger.com/assets/og/og_about.png" 
        />
        <meta 
          name="twitter:image" 
          content="https://www.antonstallboerger.com/assets/og/og_about.png" 
        />
        <meta 
          property="og:description" 
          content="Digital Product Designer and Developer"
        />
        <meta 
          property="og:title"
          content="About | Anton Stallbörger"
        />
        <meta 
          property="og:type" 
          content="website" 
        />
        <meta 
          property="og:url" 
          content="https://www.antonstallboerger.com/about"
        />
        <meta 
          name="theme-color" 
          content="#FFFFFF"
        />
        <link 
          rel="icon" 
          href="/favicon.ico" 
        />
      </Head>

      <Navbar />
      <About />
      
      </div>
  )
}
