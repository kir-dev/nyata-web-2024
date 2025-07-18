import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="hu">
      <Head>
        <meta name="title" content="NYATA 2025" />
        <meta name="description" content="Nyári Szakkollégiumi Találkozó 2024" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/manifest/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/manifest/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/manifest/favicon-16x16.png" />
        <link rel="manifest" href="/manifest/site.webmanifest" />
        <link rel="mask-icon" href="/manifest/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body className="font-body text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
