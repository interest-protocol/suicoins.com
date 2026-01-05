import { Box } from '@interest-protocol/ui-kit';
import { FC, PropsWithChildren } from 'react';

import { ModalProvider } from '@/context/modal';

import Web3Manager from '../web3-manager';
import { Web3ManagerProps } from '../web3-manager/web3-manager.types';
import Footer from './footer';
import Header from './header';

const Layout: FC<PropsWithChildren<Web3ManagerProps>> = ({
  children,
  features,
}) => (
  <ModalProvider>
    <Box bg="surface" display="flex" height="100vh" overflow="hidden">
      <Box
        flex="1"
        as="aside"
        height="100vh"
        display="flex"
        position="relative"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Header />
        <Web3Manager features={features} />
        <Box
          flex="1"
          width="100%"
          display="flex"
          overflowY="auto"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box
            m="0"
            width="100%"
            display="flex"
            variant="container"
            flexDirection="column"
            px={['m', 'l', 'l', 'xl']}
            mt="unset"
          >
            <Box as="main" flex="1" my="2xl">
              {children}
            </Box>
          </Box>
          <Footer />
        </Box>
      </Box>
    </Box>
  </ModalProvider>
);

export default Layout;
