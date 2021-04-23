export const resumeContainerVariants = {
  exit: {
    backDropFilter: "blur(0)",

    opacity: 0,
    x: "100vw",
    transition: {
      duration: 0.5,
    },
  },
}

export const topResumeVariants = {
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

export const cardVariants = {
  init: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 2,
      duration: 1,
    },
  },
}
