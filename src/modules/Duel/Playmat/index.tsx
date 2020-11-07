import React from 'react';

import { Box } from '@chakra-ui/core';

import { PlaymatProps } from './types';

export const Playmat: React.FC<PlaymatProps> = ({
  isOpponentPlaymat,
  imgUrl,
}) => {
  const topPosition = isOpponentPlaymat ? { top: '0' } : { bottom: '59px' };

  return (
    <Box
      pos="absolute"
      {...topPosition}
      w="900px"
      h="444px"
      zIndex={-1}
      backgroundImage={`url(${imgUrl})`}
      backgroundSize="100% 100%"
      backgroundRepeat="no-repeat"
      borderRadius="8px"
      border="solid 3px"
      borderColor="gray.700"
      transform={`scaleY(${isOpponentPlaymat ? '-1' : '1'})`}
      _after={{
        content: '""',
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        opacity: '0',
        zIndex: '1',
        background: 'gray.900',
      }}
    />
  );
};
