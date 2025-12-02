import { motion } from "framer-motion";

export default function SlideDown({ children, delayNum }) {
  return (
    <motion.div
        initial={{ opacity: 0, y: -20 }}
        viewport={{ once: true }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: delayNum, duration: 0.5, ease: "easeOut" }}
    >
        {children}
    </motion.div>
  );
}
