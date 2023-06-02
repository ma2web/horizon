import React, { createContext, useReducer } from 'react';
import { AppState, InitialStateType } from '../types/types';
import { reducer } from './reducers/GlobalSearch';

interface StoreContextProps {
  state: AppState;
  dispatch: React.Dispatch<any>;
}

const initialState: InitialStateType = {
  globarSearch: {
    toggleModal: false,
  },
};

export const Store = createContext<StoreContextProps>({
  state: initialState,
  dispatch: () => {},
});

interface StoreProviderProps {
  children: React.ReactNode;
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
