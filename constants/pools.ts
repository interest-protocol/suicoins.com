import { Network } from '@/lib';
import { PoolCardProps } from '@/views/pools/pool-card/pool-card.types';

import { COINS } from './coins';

export const RECOMMENDED_POOLS: Record<
  Network,
  ReadonlyArray<PoolCardProps>
> = {
  [Network.DEVNET]: [
    {
      dex: 'interest',
      tokens: [COINS[0], COINS[1], COINS[2]],
      poolObjectId: COINS[0].type,
      lpCoin: COINS[0],
      stable: false,
      apr: '3333.45',
    },
    {
      dex: 'interest',
      tokens: [COINS[1], COINS[2]],
      poolObjectId: COINS[1].type,
      lpCoin: COINS[1],
      stable: false,
      apr: '3333.45',
    },
    {
      dex: 'interest',
      tokens: [COINS[2], COINS[0]],
      poolObjectId: COINS[2].type,
      lpCoin: COINS[2],
      stable: false,
      apr: '3333.45',
    },
  ],
};
