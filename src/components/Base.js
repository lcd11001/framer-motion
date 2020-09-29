import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { containerVariants, nextVariants, buttonVariants, hoverItemVariants } from '../motions'


const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div className="base container"
      // initial={{ x: '100vw' }}
      // animate={{ x: 0 }}
      // transition={{ type: 'spring', stiffness: 120, delay: 0.5 }}
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='invisible'
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)}
              // whileHover={{
              //   scale: 1.3,
              //   color: '#f8e122',
              //   originX: 0
              // }}
              // transition={{
              //   type: 'spring',
              //   stiffness: 300
              // }}
              variants={hoverItemVariants}
              whileHover='hover'
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next"
          // initial={{ x: '-100vw' }}
          // animate={{ x: 0 }}
          // transition={{ type: 'spring', stiffness: 120 }}
          variants={nextVariants}
        // these config is inherit from parent component
        // initial='hidden'
        // animate='visible'
        >
          <Link to="/toppings">
            <motion.button
              // whileHover={{
              //   scale: 1.1,
              //   textShadow: '0px 0px 8px rgb(255, 255, 255)',
              //   boxShadow: '0px 0px 8px rgb(255, 255, 255)'
              // }}
              variants={buttonVariants}
              whileHover='hover'
            >
              Next
              </motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;