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
  // console.log(data)
  // TODO: Display differently given all possible loading, error, and ready state
  if (loading) return <Loading />
  if (!ready) {
    if (error) return <Error message={`${error}`} />
    return <Loading />
  }

  return (
    <div className="flex flex-wrap gap-10 justify-start mb-20 mt-10 mx-10 max-md:justify-around ">
      {data && data.map((content) => <ContentCard key={content.id} {...content} />)}
    </div>
  )
}

export default ContentList
