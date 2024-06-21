import { Box } from '@interest-protocol/ui-kit';
import { not } from 'ramda';
import { FC, useState } from 'react';

import SlippageInfo from './slippage';
import SwapSettingsForm from './swap-settings-form';

const SwapSettings: FC<{ noAgg?: boolean }> = ({ noAgg }) => {
  const [openManage, setOpenManage] = useState(false);

  const handleManageView = () => setOpenManage(not);

  return (
    <Box display="flex" flexDirection="column">
      <SlippageInfo isOpen={openManage} handleManageView={handleManageView} />
      {openManage && (
        <SwapSettingsForm noAgg={noAgg} handleManageView={handleManageView} />
      )}
    </Box>
  );
};

export default SwapSettings;
