import { useEffect, useState } from 'react'
import { useAuth } from '../contexts/AuthProvider'
import { ContentHook } from '../types/content.hook'
import { ContentDto } from '../types/dto'

/* Typescript section, JS guys can skip for now */
type EditPostFunc = ContentHook['editPost']
/* End typescript section */

const useContent = (postId: string): ContentHook => {
  const [data, setData] = useState<ContentDto | null>(null)
  const [error, setError] = useState<null | unknown>(null)
  const [loading, setLoading] = useState<boolean>(false)

  // TODO: implement fetching logic here, don't forget to appropiately UPDATE ALL RELATED STATES according to each scenario
  // TODO: i.e. fetch completed, fetch failed due to technical reason
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try{
        const res = await fetch(`https://api.learnhub.thanayut.in.th/content/${postId}`)
        const dataApi = await res.json()

        setData(dataApi)
      }catch (err) {
        setError(err)
      }finally{
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  // Hint! if you'd like to return usefull editPost function, you may need authorization header from useAuth() here
  const { getAuthHeader } = useAuth()
  const editPost: EditPostFunc = async (updateBody) => {
    // TODO: (Optional) implement editPost function, this function is intended to update content {postId} with given updateBody
  }

  return {
    data,
    status: {
      error,
      loading,
      ready: error == null && !loading && data != null,
    },
    editPost,
  }
}

export default useContent
