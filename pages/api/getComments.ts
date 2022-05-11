import type { NextApiRequest, NextApiResponse } from 'next'
import { Comment } from '../../typings'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'

const commentQuery = groq`
*[_type == "comment" && references(*[_type == "tweet" && _id == $tweetId]._id)] {
    _id,
    ...
} | order(_createdAt desc)
`

export default async (req: NextApiRequest, res: NextApiResponse<Comment[]>) => {
  const { tweetId } = req.query
  const comments: Comment[] = await sanityClient.fetch(commentQuery, {
    tweetId,
  })

  res.status(200).json(comments)
}
