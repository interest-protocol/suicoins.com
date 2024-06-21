import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { AGGREGATORS_LIST } from './swap.data';
import { Aggregator, SwapForm } from './swap.types';

const SwapPoweredBy: FC = () => {
  const { control } = useFormContext<SwapForm>();

  const bestPrice = useWatch({ control, name: 'settings.bestPrice' });
  const aggregator = useWatch({ control, name: 'settings.aggregator' });

  if (!aggregator && bestPrice)
    return (
      <Typography
        size="small"
        variant="body"
        color="outline"
        textAlign="center"
      >
        The aggregator was automatically selected to provide the best possible
        deal for your needs. You can change the aggregator/DEX in the next step.
      </Typography>
    );

  if (!aggregator) return null;

  if (aggregator === Aggregator.Interest) return null;

  return (
    <Box
      gap="m"
      mt="4xl"
      display="flex"
      alignItems="center"
      flexDirection="column"
    >
      <a
        target="_blank"
        rel="noopener, noreferrer"
        href={AGGREGATORS_LIST[aggregator].url}
      >
        <Box
          gap="s"
          display="flex"
          borderRadius="xs"
          alignItems="center"
          bg="lowestContainer"
          justifyContent="center"
        >
          <Typography variant="label" size="small" fontSize="s">
            Powered By:
          </Typography>
          <Box display="flex" alignItems="center" gap="xs">
            <Box width="1.5rem" height="1.5rem">
              <img
                width="100%"
                height="100%"
                style={{ borderRadius: '9999rem' }}
                src={AGGREGATORS_LIST[aggregator].logo}
                alt={AGGREGATORS_LIST[aggregator].name}
              />
            </Box>
            <Typography
              fontSize="s"
              size="medium"
              variant="body"
              fontWeight="500"
              textTransform="capitalize"
            >
              {AGGREGATORS_LIST[aggregator].name}
            </Typography>
          </Box>
        </Box>
      </a>
      {bestPrice && (
        <Typography
          size="small"
          variant="body"
          color="outline"
          textAlign="center"
        >
          The aggregator was automatically selected to provide the best possible
          deal for your needs. You can change the aggregator/DEX in the next
          step.
        </Typography>
      )}
    </Box>
  );
};

export default SwapPoweredBy;
