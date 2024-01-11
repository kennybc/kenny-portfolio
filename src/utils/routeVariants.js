const transition = { duration: 0.2, ease: [0.43, 0.13, 0.23, 0.96] };
export default {
  initial: {
    opacity: 0,
    transition,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: [0.43, 0.13, 0.23, 0.96],
      delay: 0.7,
    },
  },
  exit: {
    opacity: 0,
    transition,
  },
};
