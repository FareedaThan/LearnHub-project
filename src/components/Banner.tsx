import * as React from 'react'
import classes from './Banner.module.css'

const Banner = () => {
  return (
    <section className={classes.banner}>
      <div className="relative w-1/5">
        <img className="absolute top-0 left-64 w-28 h-28 z-40 animate-blob" src="/cloud.svg" alt="cloud" />
        <img
          className="absolute top-0 left-52 w-10 h-10 z-30 animate-blob2 opacity-70 animation-delay-2000"
          src="/cloud.svg"
          alt="cloud"
        />
        <img
          className="absolute top-3 left-[270px] w-8 h-8 z-20 animate-blob2 animation-delay-4000"
          src="/moon.svg"
          alt="moon"
        />
        <img
          className="absolute top-0 left-80 w-14 h-14 z-10 animate-blob opacity-90 animation-delay-2000"
          src="/cloud.svg"
          alt="cloud"
        />
      </div>
      <h1 className="font-bold text-4xl text-primary pb-1 hover:animate-bounce animate-ease-in">LearnHub</h1>
      <h2 className="text-yellow text-xl font-medium">Hub for Educational Videos</h2>
    </section>
  )
}

export default Banner
