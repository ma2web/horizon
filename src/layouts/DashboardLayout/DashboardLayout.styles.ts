import { makeStyles } from '../../tss/makeStyles';

export const useStyles = makeStyles<{
  hideHorizontalLine?: boolean;
}>()((theme, { hideHorizontalLine }) => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  sidebar: {
    // ** TODO - almost variables here should come from theme configuration
    background: '#f9f9f9',
    borderRight: '1px solid #e0e0e0',
    '& ul': {
      height: '100%',
      background: 'transparent',
      borderInlineEnd: 'none',
    },
    width: 20 + '%',
  },
  sidebarContainer: {
    position: 'sticky',
    top: 0,
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: '24px 16px 0px',
  },
  logo: {
    border: '1px solid #e2e2e2',
    width: 35,
    height: 35,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#fff',
  },
  logoText: {
    display: 'flex',
    alignItems: 'center',
    '& span': {
      marginLeft: 4,
    },
  },
  span: {
    fontSize: 10,
    color: '#999',
  },
  search: {
    padding: '24px 16px',
  },
  content: {
    padding: '16px 32px',
    width: 80 + '%',
  },
  children: {
    width: '100%',
  },
  header: {
    borderBottom: hideHorizontalLine ? 'none' : '1px solid #e2e2e2',
    padding: '8px 0',
    display: 'flex',
    justifyContent: 'space-between',
    position: 'sticky',
    top: 0,
    zIndex: 999,
    background: 'white',
    width: '100%',
  },
  menuItems: {
    padding: '0px 16px',
  },
  group: {
    marginBottom: 16,
  },
  groupName: {
    '& span': {
      color: '#999',
      fontSize: 12,
    },
    marginBottom: 8,
  },
  item: {
    '& a': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      textDecoration: 'none',
      padding: 8,
      borderRadius: 8,
      '&:hover': {
        background: '#ececee',
      },
      '& svg': {
        width: 16,
        height: 16,
        color: '#555',
      },
    },
    '& a.active': {
      background: '#ececee',
      '& span': {
        color: '#4832fe',
      },
      '& svg path': {
        fill: '#4832fe',
        stroke: '#4832fe',
      },
    },
  },
  itemName: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
  },
  searchShortKey: { color: '#e2e2e2' },
  searchPrefix: { color: '#444' },
  seachInput: {
    '& .ant-input': { paddingLeft: 8 + 'px !important' },
  },
  searchInput: {},
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
}));
