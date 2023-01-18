import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <meta name='twitter:card' content='summary_large_image'></meta>
        <meta name='twitter:site' content='@antonstalli'></meta>
        <meta name='twitter:title' content='Anton Stallbörger Portfolio'></meta>
        <meta name='twitter:description' content='Digital Product Designer and Developer'></meta>
        <meta property='og:title' content='Anton Stallbörger'></meta>
        <meta name="description" content="Digital Product Designer and Developer" />
        <meta name="theme-color" content="#FFFFFF"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}