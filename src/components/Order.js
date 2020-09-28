import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import { containerVariants, childVariants } from '../motions'

const Order = ({ pizza }) => {
  const [showTitle, setShowTitle] = useState(true)

  setTimeout(() => {
    setShowTitle(false)
  }, 4000)

  return (
    <motion.div className="container order"
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <AnimatePresence>
        {
          showTitle && (
            <motion.h2
              exit={{
                y: '-100vh'
              }}
            >
              Thank you for your order :)
            </motion.h2>
          )
        }
      </AnimatePresence>
      <motion.p variants={childVariants}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;