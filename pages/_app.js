import Layout from '../components/layout'
import "../public/styles.css"

export default function MyApp({ Component, pageProps }) {
  //Using layout so that common components like header are rendered everytime
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}