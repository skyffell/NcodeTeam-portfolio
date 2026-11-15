// Прелоадер с плавным исчезновением через Framer Motion
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NCodeLogo from "../NCodeLogo";
import LoadingBar from "./LoadingBar";
import styles from "./Preloader.module.scss";

function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={styles.preloader}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className={styles.preloaderContent}>
            <NCodeLogo />
            <LoadingBar />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Preloader;
