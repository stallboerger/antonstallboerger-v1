import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Footer from '../components/Footer'
import Dropdown from '../components/Dropdown'
import React from 'react';
import "@fontsource/inter";

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
        <meta name="theme-color" content="#317EFB"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      {/* <Dropdown /> */}
      <Main />
      <Footer />
      
      </div>
  )
}

