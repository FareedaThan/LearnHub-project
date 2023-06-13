import * as React from 'react'
import { Link } from 'react-router-dom'
import { ContentDto } from '../types/dto'
import classes from './ContentCard.module.css'

const ContentCard = ({ id, videoTitle, comment, rating, thumbnailUrl, creatorName, postedBy }: ContentDto) => (
  <Link to={`/content/${id}`} className={classes.card}>
    <img className={classes.thumbnail} src={thumbnailUrl} alt={`${videoTitle} video thumbnail`} />

    <div>
      <div>
        <div>
          <h4 className={classes.title}>{videoTitle}</h4>
          <h5 className={classes.subtitle}>{creatorName}</h5>
        </div>

        <h5 className={classes.comment}>{comment}</h5>
      </div>

      <div>
        <p>{postedBy.name}</p>
        <div className={classes.rating}>
          {[...Array(rating).keys()].map((star) => (
            <img key={star} className={classes.star} src="/star.svg" alt="Rating Star" />
          ))}
        </div>
      </div>
    </div>
  </Link>
)

export default ContentCard
