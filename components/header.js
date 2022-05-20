import Head from 'next/head'
import Link from 'next/link';
import {Navbar,Brand} from './styled'

export default function Header() {
    
  return (
    <>
      <Head>
        <title>Yara Works</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar>
        <Link href="/">
            <Brand >Yara Works</Brand>
        </Link>
    </Navbar >
   </>
  )
}
