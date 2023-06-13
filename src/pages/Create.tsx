import * as React from 'react'
import { FormEvent, useState } from 'react'
import ReactStars from 'react-stars'
import { useAuth } from '../contexts/AuthProvider'
import withGuard from '../guards/withGuard'
import classes from './Create.module.css'

const Create = () => {
  const [rating, setRating] = useState(0)
  const [isSubmitting, setSubmitting] = useState(false)
  const { getAuthHeader, token } = useAuth() // Hint: we may need auth token for posting new content

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (isSubmitting) return
    setSubmitting(true)

    try {
      // TODO: Try post new blog to server
    } catch (err) {
      // TODO: Handling error
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Create new content</h1>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.formGroup}>
          <label htmlFor="video-url">Video URL</label>
          <input type="text" id="video-url" />
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="comment">Comment (280 characters maximum)</label>
          <input type="text" id="comment" />
        </div>
        <div className={classes.formGroup}>
          <div className={classes.ratingContainer}>
            <label>Rating</label>
            <ReactStars count={5} value={rating} size={42} half={false} color2="#ff731d" />
          </div>
        </div>
        <div className={classes.formGroup}>
          <button type="submit" disabled={isSubmitting}>
            Create
          </button>
        </div>
      </form>
    </div>
  )
}

export default withGuard(Create)
