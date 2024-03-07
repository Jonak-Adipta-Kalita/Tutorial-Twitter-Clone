import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from '@heroicons/react/outline'
import {useSession} from 'next-auth/react'
import { FormEvent, useState } from 'react'

const TweetBox = () => {
  const [input, setInput] = useState<string>('')
  const { data: session } = useSession()

  const tweet = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className="flex space-x-2 p-5">
      <img
		src={session?.user?.image || "https://links.papareact.com/gll"}
        alt=""
        className="mt-4 h-14 w-14 rounded-full object-cover"
      />
      <div className="flex flex-1 items-center pl-2">
        <form className="flex flex-1 flex-col" onSubmit={(e) => tweet(e)}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="What's Happening?"
            className="h-24 w-full text-xl outline-none placeholder:text-xl"
          />
          <div className="flex items-center">
            <div className="flex flex-1 space-x-2 text-twitter">
              <PhotographIcon className="tweetBoxIcons" />
              <SearchCircleIcon className="tweetBoxIcons" />
              <EmojiHappyIcon className="tweetBoxIcons" />
              <CalendarIcon className="tweetBoxIcons" />
              <LocationMarkerIcon className="tweetBoxIcons" />
            </div>
            <button
              className="rounded-full bg-twitter px-5 py-2 font-bold text-white disabled:bg-gray-300"
              type="submit"
              disabled={!input || !session}
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TweetBox
