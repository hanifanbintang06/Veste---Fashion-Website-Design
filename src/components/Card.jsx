import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpLong } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";

export default function Card({ header, children }) {
    return (
        <motion.div 
            whileHover="hover"
            initial="initial"
            className="w-full h-fit px-3 md:px-5 py-4 md:py-8 flex flex-col gap-5 items-center text-black 
                hover:bg-black hover:text-white cursor-pointer">
            <div className="w-full h-fit flex justify-between items-center">
                <p className="text-lg md:text-2xl font-semibold">{header}</p>
                <motion.span
                variants={{
                    initial: { rotate: 90 },
                    hover: { rotate: 45 },
                }}
                transition={{ duration: 0.3 }}
                >
                <FontAwesomeIcon icon={faArrowUpLong} className="text-sm md:text-base" />
            </motion.span>
            </div>
            <AnimatePresence>
                <motion.div
                    variants={{
                    initial: { height: 0, opacity: 0 },
                    hover: { height: "auto", opacity: 1 },
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="overflow-hidden text-justify"
                >
                    <p className="text-sm md:text-base font-medium leading-[120%]">
                        {children}
                    </p>
                </motion.div>
            </AnimatePresence>
        </motion.div>
    )
}