import React from 'react';
import Masonry from 'react-masonry-css'

import Pins from './Pins'

const breakpointObj = {
  default: 4,
  3000: 6,
  2000: 5,
  1200: 3,
  1000: 2,
  500: 1
}

const MasonryLayout = ({ pins }) => {
  const masonryFeed = <Masonry className='flex animate-slide-fwd' breakpointCols={breakpointObj}>
                        {pins?.map(( pin )=> <Pins key={pin._id} pin={pin} className='w-max' />)}
                      </Masonry>

  return (
    <div>
      { masonryFeed }
    </div>
  )
} 

export default MasonryLayout