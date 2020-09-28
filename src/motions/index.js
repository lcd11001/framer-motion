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
            // delay: 0.5,
            mass: 0.4,
            damping: 8,
            when: 'beforeChildren',
            staggerChildren: 0.4
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
    visible: {
        x: [0, -20, 20, -20, 20, 0],
        transition: {
            delay: 2
        }
    },
    hover: {
        scale: [1, 1.1, 1, 1.1, 1, 1.1, 1],
        textShadow: '0px 0px 8px rgb(255, 255, 255)',
        boxShadow: '0px 0px 8px rgb(255, 255, 255)'
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

export {
    containerVariants,
    childVariants,
    nextVariants,
    buttonVariants,
    hoverItemVariants
}