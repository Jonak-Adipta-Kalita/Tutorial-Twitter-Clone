// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Tweet } from '../../typings'
import { sanityClient } from '../../sanity'
import { groq } from 'next-sanity'

const fetchQuery = groq`
    *[_type == "tweet" && !blockTweet] {
    _id,
    ...
    } | order(_createdAt desc)
`

export default async (
  req: NextApiRequest,
  res: NextApiResponse<{ tweets: Tweet[] }>
) => {
  const tweets: Tweet[] = await sanityClient.fetch(fetchQuery)
  res.status(200).json({ tweets })
}
