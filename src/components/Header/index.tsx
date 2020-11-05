import React from 'react';

import { Box } from '@chakra-ui/core';

import { Navbar } from '../Navbar';

export const Header: React.FC = () => {
  return (
    <Box background="tomato">
      <Navbar />
      <Box backgroundColor="tomato" />
    </Box>
  );
};
