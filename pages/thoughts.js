import Head from 'next/head'
import Navbar from '../components/Navbar'
import React from 'react';
import Thoughts from '../components/Thoughts';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Thoughts | Anton Stallbörger</title>
        <meta 
          name="description" 
          content="Digital Product Designer and Developer" 
        />
        <meta 
          property="og:image" 
          content="https://www.antonstallboerger.com/assets/og/og_thoughts.png" 
        />
        <meta 
          name="twitter:image" 
          content="https://www.antonstallboerger.com/assets/og/og_thoughts.png" 
        />
        <meta 
          property="og:description" 
          content="Digital Product Designer and Developer"
        />
        <meta 
          property="og:title"
          content="Thoughts | Anton Stallbörger"
        />
        <meta 
          property="og:type" 
          content="website" 
        />
        <meta 
          property="og:url" 
          content="https://www.antonstallboerger.com/thoughts"
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
      <Thoughts />
      
      </div>
  )
}
