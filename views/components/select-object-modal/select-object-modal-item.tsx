import {
  Box,
  Button,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { FC, MouseEventHandler, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useLocalStorage } from 'usehooks-ts';

import { TokenIcon } from '@/components';
import { LOCAL_STORAGE_VERSION } from '@/constants';
import { useNetwork } from '@/context/network';
import { FavoriteSVG } from '@/svg';

import { ObjectModalItemProps } from './select-object-modal.types';

const ObjectModalItem: FC<ObjectModalItemProps> = ({
  type,
  name,
  symbol,
  onClick,
  selected,
}) => {
  const network = useNetwork();
  const { colors } = useTheme() as Theme;
  const [isLoading, setLoading] = useState(false);
  const [favoriteObjects, setFavoriteObjects] = useLocalStorage<
    ReadonlyArray<string>
  >(`${LOCAL_STORAGE_VERSION}-sui-coins-${network}-favorite-tokens`, []);

  const isFavorite = favoriteObjects.includes(type);

  const handleFavoriteObjects: MouseEventHandler = (e) => {
    e.stopPropagation();
    setFavoriteObjects(
      isFavorite
        ? favoriteObjects.filter((favType) => favType !== type)
        : [...favoriteObjects, type]
    );
  };

  const onSelect = () => {
    if (selected) return;
    onClick();
    setLoading(true);
  };

  return (
    <Box
      p="xl"
      display="flex"
      color="textSoft"
      cursor="pointer"
      onClick={onSelect}
      alignItems="center"
      position="relative"
      justifyContent="space-between"
      nHover={{ bg: `${colors.primary}14` }}
      transition="background 500ms ease-in-out"
      bg={selected ? `${colors.primary}14` : 'unset'}
    >
      {isLoading && (
        <Box position="absolute" top="0" right="0" left="0" bottom="0">
          <Skeleton height="100%" />
        </Box>
      )}
      <Box display="flex" alignItems="center">
        <TokenIcon
          withBg
          type={type}
          size="1.6rem"
          symbol={symbol}
          network={network}
        />
        <Box
          ml="1rem"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Typography
            size="medium"
            display="flex"
            variant="title"
            alignItems="flex-end"
          >
            {symbol}
          </Typography>
          <Typography
            gap="2xs"
            size="medium"
            display="flex"
            variant="title"
            alignItems="center"
          >
            {name && (
              <Typography variant="body" size="small" opacity="0.6">
                {name}
              </Typography>
            )}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" alignItems="center" gap="xs">
        <Button
          isIcon
          zIndex="10"
          variant="text"
          onClick={handleFavoriteObjects}
        >
          <FavoriteSVG
            width="100%"
            maxWidth="1.2rem"
            maxHeight="1.2rem"
            filled={isFavorite}
          />
        </Button>
      </Box>
    </Box>
  );
};

export default ObjectModalItem;
