import { motion } from "framer-motion";

export default function SlideUp({ children, delayNum }) {
  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: delayNum, duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
