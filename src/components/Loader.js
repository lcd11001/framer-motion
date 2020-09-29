import React from 'react'
import { motion, useCycle } from 'framer-motion'
import { loaderVariants } from '../motions'

const Loader = () => {
    const [animation, cycleAnimation] = useCycle('animationOne', 'animationTwo')
    return (
        <>
            <motion.div className="loader"
                variants={loaderVariants}
                animate={animation}
            />
            <div onClick={() => cycleAnimation()}>Cycle Loader</div>
        </>
    )
}

export default Loader