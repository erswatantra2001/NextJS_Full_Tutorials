import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
  <h1>this is the nextjs tuts</h1>
  <Component {...pageProps} />
  </>
}
