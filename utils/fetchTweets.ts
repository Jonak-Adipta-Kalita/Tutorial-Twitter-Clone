import { Tweet } from '../typings'

export default async () => {
  const res = await fetch('/api/getTweets')

  const data = await res.json()
  const tweets: Tweet[] = data.tweets

  return tweets
}
