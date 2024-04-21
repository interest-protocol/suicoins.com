import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { v4 } from 'uuid';

import { isClammPool } from '@/hooks/use-pools/use-pools.utils';
import { PoolForm } from '@/views/pools/pools.types';
import ManageSlippage from '@/views/swap/manage-slippage';

import { usePoolDetails } from '../../pool-details.context';
import PoolField from '../pool-field';
import { PoolFormProps } from '../pool-field/pool-field.types';
import AmmDepositManager from './pool-form-amm-deposit-manager';
import PoolFormDepositButton from './pool-form-deposit-button';
import PoolReceiveSection from './pool-form-deposit-receive';

const PoolDeposit: FC<PoolFormProps> = ({ poolOptionView }) => {
  const { control } = useFormContext<PoolForm>();

  const { pool } = usePoolDetails();

  const { fields } = useFieldArray({ control, name: 'tokenList' });

  return (
    <>
      <Typography size="large" variant="title" fontSize="2xl">
        I would like to Deposit...
      </Typography>
      <Box display="flex" flexDirection="column" gap="m">
        {fields.length
          ? fields.map(({ id }, index) => (
              <PoolField
                key={id}
                index={index}
                poolOptionView={poolOptionView}
              />
            ))
          : [
              <PoolField
                key={v4()}
                index={0}
                poolOptionView={poolOptionView}
              />,
              <PoolField
                key={v4()}
                index={1}
                poolOptionView={poolOptionView}
              />,
            ]}
      </Box>
      <PoolReceiveSection />
      <Box>
        <Typography variant="body" size="large" mb="m">
          Manage your slippage
        </Typography>
        <Box bg="lowestContainer" borderRadius="xs">
          <ManageSlippage />
        </Box>
      </Box>
      {isClammPool(pool!) ? null : <AmmDepositManager />}
      <PoolFormDepositButton />
    </>
  );
};

export default PoolDeposit;
