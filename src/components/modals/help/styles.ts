import { makeStyles } from 'tss/makeStyles';

export const useStyles = makeStyles()((theme) => ({
  helpModal: {
    '& .ant-popover-inner': {
      maxWidth: 300,
    },
    '& button': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
}));
