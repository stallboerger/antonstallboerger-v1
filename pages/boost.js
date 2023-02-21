import Head from 'next/head'
import Navbar from '../components/Navbar'
import Boost from '../components/Boost';
import React from 'react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Anton Stallbörger</title>
        <meta name="description" content="Boost | Personalized Nutrients" />
        <meta name="theme-color" content="#FFFFFF"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Boost />
      
      </div>
  )
}
