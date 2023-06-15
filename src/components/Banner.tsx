import * as React from 'react'
import classes from './Banner.module.css'

const Banner = () => {
  return (
    <section className={classes.banner}>
      <div className="relative w-1/5">
        <img className="absolute top-0 left-64 w-28 h-28 animate-blob" src="/cloud.svg" alt="cloud" />
        <img
          className="absolute top-0 left-52 w-10 h-10 animate-blob2 opacity-70 animation-delay-2000"
          src="/cloud.svg"
          alt="cloud"
        />
        <img
          className="absolute top-0 left-80 w-14 h-14 animate-blob opacity-90 animation-delay-2000"
          src="/cloud.svg"
          alt="cloud"
        />
      </div>
      <h1 className="font-bold text-4xl text-primary pb-1">LearnHub</h1>
      <h2 className="text-yellow text-xl font-medium">Hub for Educational Videos</h2>
    </section>
  )
}

export default Banner
