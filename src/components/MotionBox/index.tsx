import React from 'react';

import { Box } from '@chakra-ui/core';

import { AnimatePresence, motion } from 'framer-motion';

import { MotionBoxProps } from './types';

const MotionBoxComponent = motion.custom(Box);

export const MotionBox: React.FC<MotionBoxProps> = (props) => {
  return (
    <AnimatePresence>
      <MotionBoxComponent {...props} />
    </AnimatePresence>
  );
};
