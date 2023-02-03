import Head from 'next/head'
import Navbar from '../components/Navbar'
import React from 'react';
import Thoughts from '../components/Thoughts';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Anton Stallbörger About Me</title>
        <meta name="description" content="Digital Product Designer and Developer" />
        <meta name="theme-color" content="#FFFFFF"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Thoughts />
      
      </div>
  )
}
