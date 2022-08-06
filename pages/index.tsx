import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Estudos para projeto particular</title>
        <meta name="description" content="Estudando NextJs com Chakra-ui" />
        <link rel="icon" href="/faviconks.png" />
      </Head>

      <main className={styles.main}>
       
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/ks.png" alt="Vercel Logo" width={85} height={25} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
