import { motion } from 'framer-motion';

export default function PrizesBody() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 260,
          damping: 20,
          mass: 1,
          duration: 0.5,
        },
      }}
    >
      Prizes
    </motion.div>
  );
}
