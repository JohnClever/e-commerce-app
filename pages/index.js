import Head from 'next/head'
import { HomeScreen } from '../screens'

export default function Home() {
  return (
    <div >
      <Head>
        <title>E-Commerce demo app</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeScreen />
    </div>
  )
}
