import React from 'react';

import { Flex, Image, Box, Link } from '@chakra-ui/core';

export const Navbar: React.FC = () => {
  return (
    <Box>
      <Flex
        w="100%"
        px={5}
        py={4}
        justifyContent="space-between"
        alignItems="center"
        background="https://images2.alphacoders.com/465/thumb-1920-465708.jpg"
      >
        <Box>
          <Link>HOME</Link>
          <Link>MISSÕES</Link>
          <Link>MINHA CONTA</Link>
          <Image
            src="https://img2.gratispng.com/20180426/opw/kisspng-yu-gi-oh-power-of-chaos-yugi-the-destiny-yu-gi-o-yu-5ae16025214c08.5777020615247196531364.jpg"
            size={30}
          />
          <Link>DECKS</Link>
          <Link>LOJA</Link>
          <Link>DUELOS</Link>
        </Box>
      </Flex>
    </Box>
  );
};
