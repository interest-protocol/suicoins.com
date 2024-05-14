import { NextPage } from 'next';
import { FormProvider, useForm } from 'react-hook-form';

import { SEO } from '@/components';
import Swap from '@/views/swap';
import { AGGREGATORS_LIST } from '@/views/swap/swap.data';
import { SwapForm } from '@/views/swap/swap.types';
import SwapInitManager from '@/views/swap/swap-init-manager';

const SwapPage: NextPage = () => {
  const form = useForm<SwapForm>({
    defaultValues: {
      loading: true,
      aggregator: AGGREGATORS_LIST[0],
      settings: { interval: '10', slippage: '0.1' },
    },
  });

  return (
    <FormProvider {...form}>
      <SEO pageTitle="Trade" />
      <SwapInitManager />
      <Swap />
    </FormProvider>
  );
};

export default SwapPage;
