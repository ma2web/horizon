import { AppState, ToggleSideBarAction } from '../../types/types';

export type AppAction = ToggleSideBarAction;

const toggleSidebar = (state: AppState, open: boolean): AppState => {
  return { ...state, toggleSidebar: !open };
};

export const reducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return toggleSidebar(state, action.open);

    default:
      return state;
  }
};
