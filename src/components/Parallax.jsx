import { motion, useScroll, useTransform } from "framer-motion";

export default function Parallax({ children, rangeMove, rangeScroll }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, rangeScroll], [0, rangeMove]);

  return (
    <motion.div style={{ y }}>
      {children}
    </motion.div>
  );
}
