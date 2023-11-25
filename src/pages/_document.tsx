import { Html, Head, Main, NextScript } from 'next/document'
import Chat from "../components/Chat"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Chat/>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
