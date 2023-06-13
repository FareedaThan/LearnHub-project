import * as React from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from '../components/Loading'
import { useAuth } from '../contexts/AuthProvider'
import useContent from '../hooks/useContent'
import classes from './Content.module.css'

const Content = () => {
  const { id: postId } = useParams()
  const {
    status: { loading, error, ready },
    data,
  } = useContent(postId || '')

  const { id, isOwnPost } = useAuth()

  // TODO: Display differently given all possible loading, error, and ready state
  if (!ready) return <Loading />

  const { videoTitle, comment, rating, postedBy } = data!

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div>
          <h4 className={classes.title}>{videoTitle}</h4>
        </div>

        <div>
          <p className={classes.commentText}>{comment}</p>

          <div className={classes.commentFooter}>
            <p>
              {[...Array(rating).keys()].map((star) => (
                <img key={star} className={classes.icon} src="/star.svg" alt="Rating Star" />
              ))}
            </p>
            <p>
              <span className={classes.emdash}>&mdash;</span> {postedBy.name}
            </p>
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
