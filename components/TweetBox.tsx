import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from '@heroicons/react/outline'
import { useSession } from 'next-auth/react'
import { FormEvent, useRef, useState } from 'react'

const TweetBox = () => {
  const { data: session } = useSession()

  const [input, setInput] = useState<string>('')
  const [image, setImage] = useState<string>('')

  const [ImageUrlBoxIsOpen, setIsImageUrlBoxIsOpen] = useState<boolean>(false)
  const imgInputRef = useRef<HTMLInputElement>(null)

  const tweet = (e: FormEvent) => {
    e.preventDefault()
  }

  const addImageToTweet = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    if (!imgInputRef.current?.value) return

    setImage(imgInputRef.current.value)
    imgInputRef.current.value = ''
    setIsImageUrlBoxIsOpen(false)
  }

  return (
    <div className="flex space-x-2 p-5">
      <img
        src={session?.user?.image || 'https://links.papareact.com/gll'}
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
              <PhotographIcon
                className="tweetBoxIcons"
                onClick={() => setIsImageUrlBoxIsOpen(!ImageUrlBoxIsOpen)}
              />
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
          {ImageUrlBoxIsOpen && (
            <form className="mt-5 flex rounded-lg bg-twitter/80 py-2 px-4">
              <input
                className="flex-1 bg-transparent p-2 text-white outline-none placeholder:text-white"
                type="ref"
                placeholder="Enter Image Url..."
                ref={imgInputRef}
              />
              <button
                className="flex-bold text-white"
                onClick={addImageToTweet}
              >
                Add Image
              </button>
            </form>
          )}
		  {image && <img className='mt-10 h-40 w-full rounded-xl object-contain' src={image} />}
        </form>
      </div>
    </div>
  )
}

export default TweetBox
