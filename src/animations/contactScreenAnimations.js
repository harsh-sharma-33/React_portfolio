export const contactContainerVariants = {
  exit: {
    backDropFilter: "blur(0)",

    opacity: 0,
    x: "100vw",
    transition: {
      duration: 0.5,
    },
  },
}

export const topContactVariants = {
  init: {
    x: "-100vw",
  },
  animate: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      delay: 1.5,
      duration: 1.5,
    },
  },
}

export const inputContactVariants = {
  init: {
    y: "40px",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      delay: 1.7,
      duration: 1,
    },
  },
}

export const buttonContactVariants = {
  init: {
    x: "-5vw",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      delay: 1.5,
      duration: 1.5,
    },
  },
}
