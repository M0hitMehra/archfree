import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`fixed p-96 inset-0 z-50 flex items-center justify-center transition-opacity ${
        isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none hidden opacity-0'
      }`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-80"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, y: -220 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="relative bg-[#ffeeec] rounded-lg p-4  shadow-xl shadow-gray-600 "
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Modal;
