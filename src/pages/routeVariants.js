const transition = { duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] };
export default {
  initial: {
    opacity: 0,
    transition,
  },
  animate: {
    opacity: 1,
    transition,
  },
  exit: {
    opacity: 0,
    transition,
  },
};
