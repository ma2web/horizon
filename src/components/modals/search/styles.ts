import { makeStyles } from 'tss/makeStyles';

export const useStyles = makeStyles<{ hideHorizontalLine?: boolean }>()(
  (theme, { hideHorizontalLine }) => ({
    searchShortKey: { color: '#e2e2e2' },
    searchPrefix: { color: '#444' },
    searchInput: {
      '& .ant-input': { paddingLeft: 8 + 'px !important' },
    },
    searchModal: {
      '& .ant-input': { paddingLeft: 8 + 'px !important' },
      '& .ant-modal-content': {
        borderRadius: 15,
        padding: 0,
        background: 'transparent',
        boxShadow: 'none',
      },
    },
    searchModalInput: {
      padding: 15,
      borderRadius: 15,
      marginBottom: 16,
    },
    searchModalTable: {
      borderRadius: 15,
      overflow: 'hidden',
    },
    searchModalNoData: {
      padding: 24,
      background: 'white',
      borderRadius: 15,
    },
    button: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
);
