const homeVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 1.5,
            duration: 1.5,
            when: 'beforeChildren'
        }
    },
    invisible: {
        x: '-100vw',
        transition: {
            ease: 'easeInOut'
        }
    }
}

const containerVariants = {
    hidden: {
        x: '100vw',
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            delay: 0.1,
            mass: 0.4,
            damping: 8,
            when: 'beforeChildren',
            staggerChildren: 0.4
        }
    },
    invisible: {
        x: '-100vw',
        transition: {
            ease: 'easeInOut'
        }
    }
}

const childVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
}

const nextVariants = {
    hidden: {
        x: '-100vw'
    },
    visible: {
        x: 0,
        transition: {
            type: 'spring',
            stiffness: 120
        }
    }
}

const buttonVariants = {
    // visible: {
    //     x: [0, -20, 20, -20, 20, 0, 0, 0, 0, 0, 0, 0],
    //     transition: {
    //         repeat: Infinity,
    //         duration: 4
    //     }
    // },
    hover: {
        scale: 1.1,
        textShadow: '0px 0px 8px rgb(255, 255, 255)',
        boxShadow: '0px 0px 8px rgb(255, 255, 255)',
        transition: {
            repeat: 3,
            duration: 0.3
        }
    }
}

const hoverItemVariants = {
    hover: {
        scale: 1.3,
        color: '#f8e122',
        originX: 0,
        transition: {
            type: 'spring',
            stiffness: 300
        }
    }
}

const backdropVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
}

const modalVariants = {
    hidden: {
        y: '-100vh',
        opacity: 0
    },
    visible: {
        y: '30vh',
        opacity: 1,
        transition: {
            delay: 0.5
        }
    }
}

const svgVariants = {
    hidden: {
        rotate: -180
    },
    visible: {
        rotate: 0,
        transition: {
            duration: 1
        }
    }
}

const pathVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 2,
            ease: 'easeInOut'
        }
    }
}

export {
    homeVariants,
    containerVariants,
    childVariants,
    nextVariants,
    buttonVariants,
    hoverItemVariants,
    backdropVariants,
    modalVariants,
    svgVariants,
    pathVariants
}