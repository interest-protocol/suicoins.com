import { Box, Typography } from '@interest-protocol/ui-kit';
import { useSuiClientContext } from '@mysten/dapp-kit';
import BigNumber from 'bignumber.js';
import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { TokenIcon } from '@/components';
import { Network } from '@/constants';
import { FixedPointMath } from '@/lib';
import { ArrowLeftSVG, TimesSVG } from '@/svg';
import { formatMoney } from '@/utils';

import { AirdropPreviewModalProps, IAirdropForm } from '../../airdrop.types';
import { getSymbol } from '../../airdrop.utils';
import AirdropConfirmButton from './airdrop-confirm-button';
import AirdropSummary from './airdrop-summary';

const AirdropPreviewModal: FC<AirdropPreviewModalProps> = ({
  method,
  onClose,
  setIsProgressView,
}) => {
  const { network } = useSuiClientContext();
  const { control } = useFormContext<IAirdropForm>();

  const { symbol, decimals, type, metadata } = useWatch({
    control,
    name: 'token',
  });

  const usdPrice = useWatch({ control, name: 'tokenUSDPrice' });
  const airdropList = useWatch({ control, name: 'airdropList' });

  const total = airdropList
    ? method === 'csv'
      ? airdropList.reduce((acc, { amount }) => acc + Number(amount), 0)
      : FixedPointMath.toNumber(
          airdropList?.reduce(
            (acc, { amount }) => acc.plus(BigNumber(amount)),
            BigNumber(0)
          ),
          decimals
        )
    : 0;

  return (
    <Box
      maxWidth="95%"
      maxHeight="90vh"
      width="26.875rem"
      minHeight="30rem"
      borderRadius="xs  "
      alignItems="center"
      display="inline-flex"
      flexDirection="column"
      boxShadow="dropShadow.2xl"
      justifyContent="space-between"
      backgroundColor="lowestContainer"
    >
      <Box width="100%">
        <Box
          p="xl"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <ArrowLeftSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
          <Typography size="large" variant="title">
            Airdrop
          </Typography>
          <TimesSVG
            onClick={onClose}
            width="100%"
            maxWidth="1rem"
            cursor="pointer"
            maxHeight="1rem"
          />
        </Box>
        <Box
          px="xl"
          pb="xl"
          pt="2xs"
          display="flex"
          flexDirection="column"
          justifyContent="start"
        >
          <Typography size="medium" variant="label" mb="xs">
            You will send
          </Typography>
          <Box
            p="s"
            bg="surface"
            display="flex"
            borderRadius="xs"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              gap="xs"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <TokenIcon
                type={type}
                symbol={symbol}
                url={metadata.iconUrl}
                network={network as Network}
              />
              <Typography
                size="small"
                variant="title"
                maxWidth="12ch"
                overflowX="hidden"
                overflowY="hidden"
                whiteSpace="nowrap"
                fontFamily="Satoshi"
                textOverflow="ellipsis"
              >
                {symbol}
              </Typography>
            </Box>
            <Box textAlign="right">
              <Box>
                <Typography size="medium" variant="body">
                  {formatMoney(total)}
                </Typography>
                <Typography
                  size="medium"
                  variant="body"
                  maxWidth="12ch"
                  overflowX="hidden"
                  overflowY="hidden"
                  whiteSpace="nowrap"
                  fontFamily="Satoshi"
                  textOverflow="ellipsis"
                >
                  {getSymbol(symbol, type)}
                </Typography>
              </Box>
              <Typography variant="body" size="small" color="#000000A3">
                {usdPrice ? formatMoney(usdPrice * total) : '--'} USD
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box width="100%" p="xl">
        <AirdropSummary method={method} />
        <AirdropConfirmButton setIsProgressView={setIsProgressView} />
      </Box>
    </Box>
  );
};

export default AirdropPreviewModal;
