import { motion } from "framer-motion";

export default function Blink({ children, delayNum }) {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: delayNum, duration: 0.5, ease: "easeOut" }}
    >
        {children}
    </motion.div>
  );
}
