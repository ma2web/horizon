import { AppState, ToggleModalAction } from '../../../types/types';

const toggleModal = (state: AppState, open: boolean): AppState => {
  return {
    ...state,
    globarSearch: { ...state.globarSearch, toggleModal: !open },
  };
};

export const reducer = (
  state: AppState,
  action: ToggleModalAction
): AppState => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return toggleModal(state, action.open);
    default:
      return state;
  }
};
