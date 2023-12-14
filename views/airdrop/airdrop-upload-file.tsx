import { Box, Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import { ChangeEventHandler, DragEventHandler, FC, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import toast from 'react-hot-toast';

import { FolderSVG } from '@/svg';

import { IAirdropForm } from './airdrop.types';
import AirdropUploadFileCard from './airdrop-upload-file-card';

const AirdropUploadFile: FC = () => {
  const { colors } = useTheme() as Theme;
  const [dragging, setDragging] = useState(false);
  const { setValue, control } = useFormContext<IAirdropForm>();

  const csvFile = useWatch({ control, name: 'file' });

  const handleChangeFile: ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0];

    if (!file) return toast.error('Something went wrong');

    if (file.type !== 'text/csv')
      return toast.error('Make sure that you are sending a CSV File');

    setValue('file', file);
  };

  const handleDropFile: DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();

    if (e.dataTransfer.items) {
      const item = e.dataTransfer.items[0];

      if (item.kind !== 'file' || item.type !== 'text/csv')
        return toast.error('Make sure that you are sending a CSV File');

      const file = item.getAsFile();

      if (!file) return toast.error('Something went wrong');

      return setValue('file', file);
    }

    const file = e.dataTransfer.files[0];

    if (file.type !== 'text/csv')
      return toast.error('Make sure that you are sending a CSV File');

    setValue('file', file);
  };

  return (
    <Box display="flex" flexDirection="column" gap="s">
      <Typography variant="body" size="large">
        2. Upload file
      </Typography>
      {csvFile ? (
        <Box>
          <AirdropUploadFileCard name={csvFile.name} size={csvFile.size} />
        </Box>
      ) : (
        <Box
          p="2xl"
          gap="m"
          bg="surface"
          display="flex"
          borderRadius="xs"
          borderWidth="1px"
          alignItems="center"
          flexDirection="column"
          onDrop={handleDropFile}
          onDragEnter={() => setDragging(true)}
          onDragLeave={() => setDragging(false)}
          onDragOver={(e) => e.preventDefault()}
          borderStyle={dragging ? 'solid' : 'dashed'}
          borderColor={dragging ? 'primary' : 'outlineVariant'}
        >
          <Box
            display="flex"
            width="2.5rem"
            height="2.5rem"
            borderRadius="full"
            alignItems="center"
            justifyContent="center"
            bg={`${colors.primary}14`}
          >
            <FolderSVG maxWidth="1.4rem" maxHeight="1.4rem" width="100%" />
          </Box>
          <Typography
            size="large"
            variant="body"
            maxWidth="9rem"
            textAlign="center"
          >
            Drop your file here or{' '}
            <Typography
              as="label"
              size="large"
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              htmlFor="file"
              variant="body"
              color="primary"
              cursor="pointer"
              textDecoration="underline"
            >
              upload
            </Typography>
            <Box display="none">
              <input
                id="file"
                type="file"
                accept="text/csv"
                onChange={handleChangeFile}
              />
            </Box>
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default AirdropUploadFile;
