import { makeStyles } from 'tss/makeStyles';

export const useStyles = makeStyles()((theme) => ({
  root: {
    padding: '16px 0px',
  },
  tabs: {},
  tools: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 0 32px',
    borderBottom: '1px solid #e9e9e9',
  },
  filter: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    '& span': {
      color: '#888',
    },
  },
  table: {},
  search: {},
  resetSearchIcon: {
    cursor: 'pointer',
    color: '#999',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
