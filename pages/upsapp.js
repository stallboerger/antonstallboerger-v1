import Head from 'next/head'
import Navbar from '../components/Navbar'
import UpsApp from '../components/UpsApp';
import React from 'react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Anton Stallbörger</title>
        <meta name="description" content="Digital Product Designer and Developer" />
        <meta
        property="og:image"
        content="https://my-og-img.vercel.app/api/og?title=my post title"
        />
        <meta name="theme-color" content="#FFFFFF"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <UpsApp />
      
      </div>
  )
}
