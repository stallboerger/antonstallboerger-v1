import Head from 'next/head'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import React from 'react';

export default function Home() {
  return (
    <div>
      <Head>
      <title>Anton Stallbörger</title>
        <meta 
          name="description" 
          content="Digital Product Designer and Developer" 
        />
        <meta 
          property="og:image" 
          content="https://www.antonstallboerger.com/og_image.png" 
        />
        <meta 
          name="twitter:image" 
          content="https://www.antonstallboerger.com/og_image.png" 
        />
        <meta 
          property="og:description" 
          content="Digital Product Designer and Developer"
        />
        <meta 
          property="og:title"
          content="Anton Stallbörger"
        />
        <meta 
          property="og:type" 
          content="website" 
        />
        <meta 
          property="og:url" 
          content="https://www.antonstallboerger.com"
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
      <Main />
      
      </div>
  )
}

