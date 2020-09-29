import React from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { loaderVariants } from '../motions'

const Loader = () => {
    return (
        <>
            <motion.div className="loader"
                variants={loaderVariants}
                animate='animationOne'
            >

            </motion.div>
        </>
    )
}

export default Loader