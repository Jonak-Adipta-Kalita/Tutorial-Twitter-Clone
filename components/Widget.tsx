import { SearchIcon } from '@heroicons/react/outline'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

const Widget = () => {
  return (
    <div className="col-span-3 mt-2 hidden space-y-4 px-2 lg:inline">
      <div className="mt-2 flex items-center space-x-2 rounded-full bg-gray-100 p-3">
        <SearchIcon className="h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search Twitter"
          className="flex-1 bg-transparent outline-none"
        />
      </div>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="AdiptaJonak"
        options={{ height: 1000 }}
      />
    </div>
  )
}

export default Widget
