import React, { createContext, useReducer, useContext, useEffect } from 'react';
import { save } from '../api';
import { AppState } from '../App';
import { withData } from '../hok/withData';
import { appStateReducer } from './reducer';


interface AppStateContextProps {
  state: AppState;
  dispatch: React.Dispatch<any>;
}

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);



export const AppStateProvider = withData(({ children, initialState }: React.PropsWithChildren<{ initialState: AppState }>) => {
  const [state, dispatch] = useReducer(appStateReducer, initialState)


  useEffect(() => {
    save(state)
  }, [state])

  return <AppStateContext.Provider value={{ state, dispatch }}>
    {children}
  </AppStateContext.Provider>
})

export const useAppState = () => {
  return useContext(AppStateContext);
};
