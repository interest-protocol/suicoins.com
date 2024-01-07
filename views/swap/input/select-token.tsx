import { Box, Button, Motion, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { useModal } from '@/hooks/use-modal';
import { BNBSVG, ChevronRightSVG } from '@/svg';
import SelectTokenModal from '@/views/components/select-token-modal';
import { CoinDataWithBalance } from '@/views/components/select-token-modal/select-token-modal.types';

import { SwapForm } from '../swap.types';
import { SelectTokenProps } from './input.types';

const SelectToken: FC<SelectTokenProps> = ({ label, balance }) => {
  const { setModal, handleClose } = useModal();

  const { control, setValue } = useFormContext<SwapForm>();

  const token = useWatch({
    control,
    name: label,
  });

  const onSelect = (coin: CoinDataWithBalance) => {
    setValue(label, {
      ...coin,
      value: '',
      locked: false,
    });
  };

  const openModal = () =>
    setModal(
      <Motion
        animate={{ scale: 1 }}
        initial={{ scale: 0.85 }}
        transition={{ duration: 0.3 }}
      >
        <SelectTokenModal closeModal={handleClose} onSelect={onSelect} />
      </Motion>,
      {
        isOpen: true,
        custom: true,
        opaque: false,
        allowClose: true,
      }
    );

  return (
    <Box position="relative">
      <Button
        pr="m"
        pl="xs"
        variant="tonal"
        fontSize="0.875rem"
        onClick={openModal}
        PrefixIcon={
          <Box
            bg="#000"
            color="#fff"
            display="flex"
            width="1.5rem"
            height="1.5rem"
            alignItems="center"
            position="relative"
            borderRadius="full"
            justifyContent="center"
          >
            <BNBSVG maxWidth="1.125rem" maxHeight="1.125rem" width="100%" />
          </Box>
        }
        SuffixIcon={
          <Box minWidth="1rem">
            <ChevronRightSVG maxHeight="1rem" maxWidth="1rem" width="100%" />
          </Box>
        }
      >
        {token.symbol}
      </Button>
      <Typography variant="label" size="small" mt="l">
        Balance:
        <Typography variant="label" size="small" color="primary" as="span">
          {balance}
        </Typography>
      </Typography>
    </Box>
  );
};

export default SelectToken;
