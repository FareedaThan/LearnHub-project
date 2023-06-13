import * as React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import ContentList from '../components/ContentList'
import { useAuth } from '../contexts/AuthProvider'
import classes from './Home.module.css'

const Home = () => {
  const { isLoggedIn } = useAuth()
  return (
    <>
      <Banner />
      {isLoggedIn && (
        <div className={classes.container}>
          <Link to="/new" className={classes.button}>
            Create new content
          </Link>
        </div>
      )}
      <ContentList />
    </>
  )
}

export default Home
