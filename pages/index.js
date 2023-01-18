import Head from 'next/head'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import React from 'react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Anton Stallbörger</title>
        <meta property='og:title' content='Anton Stallbörger'></meta>
        <meta name="description" content="Digital Product Designer and Developer" />
        <meta
        property="og:image"
        content="https://antonstallboerger.com/og_image.png"
        />
        <meta name='twitter:card' content='summary_large_image'></meta>
        <meta name='twitter:site' content='@antonstalli'></meta>
        <meta name='twitter:title' content='Anton Stallbörger Portfolio'></meta>
        <meta name='twitter:description' content='Digital Product Designer and Developer'></meta>
        <meta name="twitter:image" content="https://antonstallboerger.com/og_image.png"></meta>
        <meta name="theme-color" content="#FFFFFF"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Main />
      
      </div>
  )
}

