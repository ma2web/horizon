import React, { createContext, useReducer } from 'react';
import { AppState } from '../types/types';
import { AppAction, reducer } from './reducers';

interface StoreContextProps {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}

const initialState: AppState = {
  toggleSidebar: false,
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
