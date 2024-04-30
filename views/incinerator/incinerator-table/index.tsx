import { Box, Motion, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { IncineratorNoAssetsSVG } from '@/svg';

import IncineratorTableBody from './table-body';
import IncineratorTableHeader from './table-header';

const IncineratorTable: FC = () => {
  const coinObject: any[] = [];
  return (
    <Box mb="l" gap="l" width="100%" display="grid" gridTemplateColumns="1fr">
      <IncineratorTableHeader />
      {coinObject ? (
        <Box
          gap="s"
          width="100%"
          display="flex"
          height="29.188rem"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box p="m">
            <IncineratorNoAssetsSVG
              maxHeight="7.375rem"
              maxWidth="6.625rem"
              width="100%"
            />
          </Box>
          <Typography variant="label" size="medium">
            You don’t have any assets
          </Typography>
        </Box>
      ) : (
        <Box overflowX="auto">
          <Motion as="table" rowGap="l" width="100%" mt="l">
            <IncineratorTableBody />
          </Motion>
        </Box>
      )}
    </Box>
  );
};

export default IncineratorTable;
