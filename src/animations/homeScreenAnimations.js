export const homeContainerVariant = {
  init: {
    backdropFilter: "blur(0)",
  },

  exit: {
    backdropFilter: "blur(10px)",
    transition: {
      duration: 0.5,
    },
  },
}

export const bottomDivVariant = {
  init: {
    y: "30vh",
  },
  exit: {
    y: "100vh",
    transition: {
      delay: 0,
      duration: 0,
      type: "spring",
      stiffness: 70,
    },
  },
  animate: {
    y: 0,
    transition: {
      delay: 0,
      duration: 1,
      type: "spring",
      stiffness: 70,
    },
  },
}

export const nameVariant = {
  init: {
    x: "-100vw",
  },
  animate: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      delay: 0.5,
      duration: 2,
    },
  },

  exit: {
    x: "-100vw",
    transition: {
      type: "spring",
      stiffness: 50,
      duration: 0.5,
    },
  },
}

export const phoneVariants = {
  init: {
    y: "-100vh",
    rotate: 270,
  },

  exit: {
    y: "-100vh",
    rotate: 270,
    transition: {
      delay: 0.4,
      duration: 0.5,
      type: "spring",
      stiffness: 80,
    },
  },

  animate: {
    y: 0,
    transition: {
      delay: 1.5,
      duration: 2,
      type: "spring",
      stiffness: 80,
    },
  },
}
