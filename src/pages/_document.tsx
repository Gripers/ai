import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <title>AI TG</title>
        <meta name='description' content='ai' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src='https://telegram.org/js/telegram-web-app.js'></script>
      </body>
    </Html>
  );
}
