import type { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widget from '../components/Widget'
import { Tweet } from '../typings'
import fetchTweets from '../utils/fetchTweets'
import { Toaster } from 'react-hot-toast'

const Home: NextPage<{ tweets: Tweet[] }> = ({ tweets }) => {
  return (
    <div className="mx-auto max-h-screen overflow-hidden lg:max-w-6xl">
      <Head>
        <title>JAK Twitter Clone 3</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster />
      <main className="grid grid-cols-10">
        <Sidebar />
        <Feed tweets={tweets} />
        <Widget />
      </main>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const tweets = await fetchTweets()

  return {
    props: {
      tweets,
    },
  }
}
