import { Box } from '@interest-protocol/ui-kit';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { v4 } from 'uuid';

import { Routes, RoutesEnum } from '@/constants';

import { MENU_ITEMS } from './nav-bar.data';

const NavBar: FC = () => {
  const { asPath, push } = useRouter();

  return (
    <Box display={['none', 'none', 'none', 'flex']} justifyContent="center">
      {MENU_ITEMS.map(({ path, name }) => (
        <Box
          key={v4()}
          py="s"
          fontSize="s"
          display="flex"
          cursor="pointer"
          fontFamily="Proto"
          textAlign="center"
          borderRadius="full"
          alignItems="center"
          border="0.25rem solid"
          px={['s', 's', 's', 'xl']}
          onClick={() => push(path)}
          nHover={{
            color:
              path == Routes[RoutesEnum.Pools] &&
              [Routes[RoutesEnum.PoolDetails]].includes(asPath)
                ? 'lowestContainer'
                : 'primary',
          }}
          transition="all 0.3s ease-in-out"
          nActive={{ borderColor: '#0053DB33' }}
          color={
            asPath !== path
              ? path == Routes[RoutesEnum.Pools] &&
                [Routes[RoutesEnum.PoolDetails]].includes(asPath)
                ? 'lowestContainer'
                : 'onSurface'
              : 'primary'
          }
          bg={
            path == Routes[RoutesEnum.Pools] &&
            [Routes[RoutesEnum.PoolDetails]].includes(asPath)
              ? 'primary'
              : 'unset'
          }
          borderColor={
            asPath !== path
              ? path == Routes[RoutesEnum.Pools] &&
                [Routes[RoutesEnum.PoolDetails]].includes(asPath)
                ? '#0053DB33'
                : 'transparent'
              : '#0053DB33'
          }
        >
          {name}
        </Box>
      ))}
    </Box>
  );
};

export default NavBar;
