import Layout from '../components/layout'
import "../public/styles.css"

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}