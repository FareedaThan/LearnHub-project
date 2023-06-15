import * as React from 'react'
import useContentList from '../hooks/useContentList'
import ContentCard from './ContentCard'
import Error from './Error'
import Loading from './Loading'

const ContentList = () => {
  const {
    status: { loading, error, ready },
    data,
  } = useContentList()

  // TODO: Display differently given all possible loading, error, and ready state
  if(loading) return <Loading />
  if(error) return <Error />
  if (!ready) return <Loading />

  return (
    <div className='flex flex-wrap gap-10 justify-around mb-20 mx-10 mt-10'>
      {data && data.map((content) => (
        <ContentCard key={content.id} {...content} />
      ))}
    </div>
  )
}

export default ContentList
