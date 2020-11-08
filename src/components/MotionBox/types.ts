import { BoxProps } from '@chakra-ui/core';

import { HTMLMotionProps } from 'framer-motion';

export type MotionBoxProps = {
  boxProps: BoxProps;
  motionProps: HTMLMotionProps<'div'>;
};
