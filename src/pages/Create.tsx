import * as React from 'react'
import { FormEvent, useState } from 'react'
import ReactStars from 'react-stars'
import { useAuth } from '../contexts/AuthProvider'
import withGuard from '../guards/withGuard'
import classes from './Create.module.css'
import { host } from '../constant'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const Create = () => {
  const [rating, setRating] = useState(0)
  const [inputUrl, setInputUrl] = useState('')
  const [inputComment, setInputComment] = useState('')
  const navigate = useNavigate()
  const { getAuthHeader } = useAuth() // Hint: we may need auth token for posting new content

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      // TODO: Try post new blog to server
      const res = await fetch(`${host}/content`, {
        method: 'POST',
        body: JSON.stringify({
          videoUrl: inputUrl,
          comment: inputComment,
          rating: rating,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          // Authorization: `Bearer ${token}`,
          // function below return object so we should destruct when using it
          ...getAuthHeader(),
        },
      })
      const data = await res.json()
      toast.success('Post created!')
      navigate('/')
      return data
    } catch (err: any) {
      // TODO: Handling error
      throw new Error(err.message)
    }
  }

  const setStarValue = (newrating: number) => {
    setRating(newrating)
  }

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Create new content</h1>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.formGroup}>
          <label htmlFor="video-url">Video URL</label>
          <input type="text" id="video-url" value={inputUrl} onChange={(e) => setInputUrl(e.target.value)} required />
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="comment">Comment (280 characters maximum)</label>
          <input
            type="text"
            id="comment"
            value={inputComment}
            onChange={(e) => setInputComment(e.target.value)}
            maxLength={280}
            required
          />
        </div>
        <div className={classes.formGroup}>
          <div className={classes.ratingContainer}>
            <label>Rating</label>
            <ReactStars count={5} value={rating} size={40} half={false} color2="#FFC26F" onChange={setStarValue} />
          </div>
        </div>
        <div className={classes.formGroup}>
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  )
}

export default withGuard(Create)
