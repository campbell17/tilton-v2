import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html className="h-full bg-gray-50" lang='en'>
        <Head />
        <body className="h-full overflow-auto">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument