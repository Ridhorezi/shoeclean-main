/* eslint-disable @next/next/no-title-in-document-head */
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="keywords"
            content="shoe clean, Shoe Clean, SHOE CLEAN, Shoe Clean Indonesia, shoe clean indonesia, Jasa Cuci Sepatu, jasa cuci sepatu, laundry sepatu bekasi, laundry sepatu indonesia, startup"
          />
          <meta
            name="description"
            content="Shoe Clean™, Shoe Clean is a Shoe Care Service Brand in Indonesia"
          />
          <meta name="author" content="Developer Shoe Clean Indonesia" />
          <meta name="robot" content="index,follow" />
          <meta
            name="copyright"
            content="Copyright © 2023 ShoeClean™ All rights reserved"
          />
          <meta name="language" content="indonesia,english" />
          <link rel="shortcut icon" href="/img/favicon-shoeclean.png" />

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Akronim&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;500;600;700;800;900&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;200;300;400;500;600;700;800;900&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700;800;900&display=swap"
          />
        </Head>

        <body>
          <Main />
          
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
