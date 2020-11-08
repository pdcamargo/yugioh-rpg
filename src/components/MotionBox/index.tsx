import React from 'react';

import { Box } from '@chakra-ui/core';

import { AnimatePresence, motion } from 'framer-motion';

import { MotionBoxProps } from './types';

export const MotionBox: React.FC<MotionBoxProps> = ({
  motionProps,
  boxProps,
  children,
}) => {
  return (
    <AnimatePresence>
      <motion.div {...motionProps}>
        <Box {...boxProps}>{children}</Box>
      </motion.div>
    </AnimatePresence>
  );
};
