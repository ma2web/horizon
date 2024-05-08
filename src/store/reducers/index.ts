import { AppState } from 'types';
import { globalSearchReducer } from './GlobalSearch';

export const rootReducer = (state: AppState, action: any): AppState => {
  return {
    ...state,
    globarSearch: globalSearchReducer(state, action).globarSearch,
  };
};
