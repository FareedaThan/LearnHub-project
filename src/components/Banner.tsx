import * as React from 'react'
import classes from './Banner.module.css'

const Banner = () => {
  return (
    <section className={classes.banner}>
      <h1 className='font-bold text-4xl text-orange-500 pb-1'>LearnHub</h1>
      <h2 className='text-slate-500 text-xl font-medium'>Hub for Educational Videos</h2>
    </section>
  )
}

export default Banner
