import React from 'react';

import { ChakraProvider } from '@chakra-ui/core';

function MyApp({ Component: App, pageProps }) {
  return (
    <ChakraProvider resetCSS>
      <App {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
