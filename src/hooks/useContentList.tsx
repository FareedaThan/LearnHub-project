import { useEffect, useState } from 'react'
import { ContentListHook } from '../types/contentList.hook'
import { ContentDto } from '../types/dto'
import { host } from '../constant'

const useContentList = (): ContentListHook => {
  const [data, setData] = useState<ContentDto[] | null>(null)
  const [error, setError] = useState<null | unknown>(null)
  const [loading, setLoading] = useState<boolean>(false)

  // TODO: implement fetching logic here, don't forget to appropiately UPDATE ALL RELATED STATES according to each scenario
  // TODO: i.e. fetch completed, fetch failed due to technical reason
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await fetch(`${host}/content`)
        const dataApi = await res.json()

        setData(dataApi.data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return {
    data,
    status: {
      error,
      loading,
      ready: error == null && !loading && data != null,
    },
  }
}

export default useContentList
