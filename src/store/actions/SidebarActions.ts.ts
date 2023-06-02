import { AppAction } from '../reducers';

export const toggleSidebar = (
  open: boolean,
  dispatch: React.Dispatch<AppAction>
) => {
  dispatch({
    type: 'TOGGLE_SIDEBAR',
    open,
  });
};
