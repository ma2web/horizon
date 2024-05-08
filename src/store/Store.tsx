import React, { createContext, useReducer } from 'react';
import { AppState, InitialStateType } from 'types';
import { rootReducer } from './reducers';

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
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
