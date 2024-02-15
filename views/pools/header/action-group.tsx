import { Box, Button, TextField } from '@interest-protocol/ui-kit';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { Routes, RoutesEnum } from '@/constants';
import { FindSVG, SearchSVG } from '@/svg';

import { ActionGroupProps } from './header.types';

const ActionGroup: FC<ActionGroupProps> = ({ showSearchView }) => {
  const { push } = useRouter();

  const gotoFindPool = () => push(Routes[RoutesEnum.FindPool]);

  return (
    <>
      <Box
        display={['none', 'none', 'none', 'flex']}
        gap="0.25rem"
        alignItems="center"
      >
        <TextField
          Prefix={
            <Box height="1.25rem" width="1.25rem">
              <SearchSVG maxHeight="1.25rem" maxWidth="1.25rem" width="100%" />
            </Box>
          }
          placeholder="Search"
          fieldProps={{
            width: '13rem',
          }}
        />
        <Button
          py="0.725rem"
          variant="tonal"
          bg="#00000016"
          onClick={gotoFindPool}
          SuffixIcon={
            <Box
              display="flex"
              width="1.25rem"
              height="1.25rem"
              justifyContent="center"
            >
              <FindSVG maxHeight="100%" maxWidth="100%" width="100%" />
            </Box>
          }
        >
          Find Pool
        </Button>
      </Box>
      <Box display={['flex', 'flex', 'flex', 'none']} gap="0.25rem">
        <Button
          isIcon
          variant="tonal"
          height="1.5rem"
          width="1.5rem"
          bg="#00000016"
          onClick={showSearchView}
        >
          <Box height="1.25rem" width="1.25rem">
            <SearchSVG maxHeight="1.25rem" maxWidth="1.25rem" width="100%" />
          </Box>
        </Button>
        <Button
          isIcon
          width="1.5rem"
          height="1.5rem"
          variant="tonal"
          onClick={gotoFindPool}
          bg="rgba(0, 0, 0, 0.08)"
        >
          <Box height="1.25rem" width="1.25rem">
            <FindSVG maxHeight="100%" maxWidth="100%" width="100%" />
          </Box>
        </Button>
      </Box>
    </>
  );
};

export default ActionGroup;
