import * as React from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from '../components/Loading'
import { useAuth } from '../contexts/AuthProvider'
import useContent from '../hooks/useContent'
import classes from './Content.module.css'
import Error from '../components/Error'
import ReactPlayer from 'react-player'

const Content = () => {
  const { id: postId } = useParams()
  const {
    status: { loading, error, ready },
    data,
  } = useContent(postId || '')

  const { id, isOwnPost } = useAuth()

  // TODO: Display differently given all possible loading, error, and ready state
  if (loading) return <Loading />
  if (error) return <Error />
  if (!ready) return <Loading />

  const { videoTitle, comment, rating, postedBy, creatorName, videoUrl, createdAt, updatedAt } = data!
  const createDate = new Date(createdAt)
  const updateDate = new Date(updatedAt)

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <header>
          <h4 className={classes.title}>{videoTitle}</h4>
          <h6 className={classes.creator}>{creatorName}</h6>
        </header>
        <div className={classes.playerWrapper}>
          <ReactPlayer url={videoUrl} width="100%" />
        </div>

        <div className={classes.commentBox}>
          <p className={classes.commentText}>{comment}</p>

          <div className={classes.commentFooter}>
            <p className={classes.rating}>
              {[...Array(rating).keys()].map((star) => (
                <img key={star} className={classes.icon} src="/star.svg" alt="Rating Star" />
              ))}
            </p>
            <p>
              <span className={classes.emdash}>&mdash;</span> {postedBy.name}
            </p>
            <p className="text-xs text-slate-400">{createDate.toString().substring(0, 15)}</p>
            <p className="text-xs text-slate-400">(Updated: {updateDate.toString().substring(0, 15)})</p>
            {
              /*
              TODO: update the conditional rendering here, if you chosen to work with isOwnPost function, please continue to work on AuthProvider.tsx, otherwise you can use `id` from useAuth()
               */ isOwnPost && isOwnPost(data!) && (
                <Link to={`/content/${postId}/edit`}>
                  <img className={classes.icon} src="/edit.svg" alt="Edit" />
                  Edit
                </Link>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
