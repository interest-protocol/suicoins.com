import { SuiTransactionBlockResponse } from '@mysten/sui.js/client';
import { normalizeSuiAddress } from '@mysten/sui.js/utils';
import BigNumber from 'bignumber.js';
import { prop } from 'ramda';

import { signAndExecute } from '@/utils';
import { SendAirdropArgs } from '@/views/airdrop/airdrop.types';

export const findNextVersionAndDigest = (
  tx: SuiTransactionBlockResponse,
  id: string
) => {
  let nextDigest = '';
  let nextVersion = '';
  tx.objectChanges!.forEach((objectChanged: any) => {
    const objectId = prop('objectId', objectChanged);
    if (objectId === id) {
      nextDigest = prop('digest', objectChanged);
      nextVersion = prop('version', objectChanged);
    }
  });

  return [nextDigest, nextVersion];
};

export const sendAirdrop = async ({
  suiClient,
  txb,
  contractPackageId,
  tokenType,
  coinToSend,
  batch,
  currentAccount,
  signTransactionBlock,
}: SendAirdropArgs) => {
  txb.moveCall({
    target: `${contractPackageId}::airdrop::send`,
    typeArguments: [tokenType],
    arguments: [
      coinToSend,
      txb.pure(batch.map((x) => normalizeSuiAddress(x.address))),
      txb.pure(
        batch.map((x) => BigNumber(x.amount).decimalPlaces(0).toString())
      ),
    ],
  });

  return signAndExecute({
    suiClient,
    txb,
    currentAccount,
    signTransactionBlock,
    options: {
      showObjectChanges: true,
    },
  });
};
