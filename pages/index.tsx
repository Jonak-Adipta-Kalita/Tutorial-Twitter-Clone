import type { NextPage } from 'next'
import Head from 'next/head'
import Feed from '../components/Feed'
import Sidebar from '../components/SIdebar'
import Widget from '../components/Widget'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>JAK Twitter Clone 3</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <Sidebar />
        <Feed />
        <Widget />
      </main>
    </div>
  )
}

export default Home
