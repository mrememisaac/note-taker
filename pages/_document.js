import Document, {Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document{
  
  static async getInitialProps(ctx){
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render(){
    return(
      <Html>
        <Head>
          <link href="/styles/bootstrap.min.css" rel="stylesheet"/>
          <link href="/styles/fontawesome/css/all.css" rel="stylesheet"/>
          <link href="/styles/style.css" rel="stylesheet"/>
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    );
  }
}

export default MyDocument;