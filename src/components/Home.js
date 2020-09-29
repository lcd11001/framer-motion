import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { buttonVariants, homeVariants } from '../motions'
import Loader from './Loader'

const Home = () => {
  return (
    <motion.div className="home container"
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // transition={{ delay: 1.5, duration: 1.5, when: 'beforeChildren' }}
      variants={homeVariants}
      initial='hidden'
      animate='visible'
      exit='invisible'
    >
      <h2>
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        <motion.button
          // whileHover={{
          //   scale: 1.1,
          //   textShadow: '0px 0px 8px rgb(255, 255, 255)',
          //   boxShadow: '0px 0px 8px rgb(255, 255, 255)'
          // }}
          variants={buttonVariants}
          whileHover='hover'
        >
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  )
}

export default Home;