import { isValidSuiAddress } from '@mysten/sui.js/utils';
import { propOr } from 'ramda';

import { MAINNET_COINS_INFO } from '@/constants';
import { isBigNumberish } from '@/utils';

import { AirdropData } from './airdrop.types';

export const csvToAirdrop = (csv: string): AirdropData[] | string => {
  try {
    const lines = csv.split(',');
    const addresses = lines.filter((x) => isValidSuiAddress(x));
    const amounts = lines.filter(
      (x) => !isValidSuiAddress(x) && isBigNumberish(x)
    );

    if (addresses.length !== amounts.length)
      throw new Error('Numbers of addresses and numbers do not match');

    const data = [] as AirdropData[];

    addresses.forEach((address, i) => {
      data.push({
        address,
        amount: amounts[i],
      });
    });

    return data;
  } catch (error) {
    return propOr('Something went wrong', 'message', error);
  }
};

export const getBridgeIdentifier = (bridge: 'celer' | 'wormhole' | null) => {
  if (bridge === 'wormhole') return 'w';
  if (bridge === 'celer') return 'c';
  return '';
};

export const getSymbol = (symbol: string, type: string) => {
  const { origin, bridge } = MAINNET_COINS_INFO[type] ?? {
    origin: null,
    bridge: null,
  };

  return `${symbol}${
    bridge
      ? `(${getBridgeIdentifier(bridge)}${origin ? `-${origin}` : ''})`
      : ''
  }`;
};
