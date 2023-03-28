import Head from 'next/head'
import Navbar from '../components/Navbar'
import React from 'react';
import SustainableGoods from '../components/SustainableGoods';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sustainable Goods Anton Stallbörger</title>
        <meta name="description" content="Digital Product Designer and Developer" />
        <meta name="theme-color" content="#FFFFFF"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <SustainableGoods />
      
      </div>
  )
}
