import { makeStyles } from 'tss/makeStyles';

export const useStyles = makeStyles()((theme) => ({
  table: {},
  th: {
    background: 'white !important',
    color: '#ababab !important',
  },
  td: {
    position: 'relative',
    '&::after': {
      content: "''",
      position: 'absolute',
      width: 1,
      height: '50%',
      background: '#ececec',
      right: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 999,
    },
    '&:last-child': {
      '&::after': {
        display: 'none',
      },
    },
  },
}));
