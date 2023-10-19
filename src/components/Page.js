import { motion } from "framer-motion";
import routeVariants from "pages/routeVariants";

export default function Block({ className, children }) {
  return (
    <motion.div
      className={className}
      variants={routeVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}
