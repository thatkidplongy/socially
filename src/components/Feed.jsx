import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { client } from '../client'
import { feedQuery, searchQuery } from '../utils/data'
import MasonryLayout from './MasonryLayout'
import Spinner from './Spinner'

const Feed = () => {
  const [loading, setLoading] = useState(false)
  const [pins, setPins] = useState(null)
  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)
    if(categoryId){
      const query = searchQuery(categoryId)

      client.fetch(query)
        .then((data) => {
          setPins(data);
          setLoading(false)
        })
    } else {
      client.fetch(feedQuery)
        .then((data) => {
          setPins(data);
          setLoading(false);
        })
    }
  }, [categoryId])
  

  if(loading) return <div className='mt-60'><Spinner message='We are adding new ideas to your feed'/></div>

  if(!pins?.length) return <h2>No Pins Available</h2>

  const pinsFeed = pins && <MasonryLayout pins={pins} />

  return (
    <div>
      { pinsFeed }
    </div>
  )
}

export default Feed