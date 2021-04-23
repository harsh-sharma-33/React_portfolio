export const aboutContainerVariants = {
  exit: {
    backDropFilter: "blur(0)",

    opacity: 0,
    x: "100vw",
    transition: {
      duration: 0.5,
    },
  },
}

export const topAboutVariants = {
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

export const imageContainerVariants = {
  init: {
    x: "-100vw",
  },
  animate: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      delay: 1.8,
      duration: 1.8,
    },
  },
}

export const aboutTextVariants = {
  init: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 2,
      duration: 1,
    },
  },
}

export const servicesVariants = {
  init: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 2,
      duration: 2,
    },
  },
}
export const cardTitleVariants = {
  init: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 2,
      duration: 1,
    },
  },
}
