import React, { useContext } from 'react';
import { createContext } from 'react';

interface ITask {
	id: number;
	text: string;
}
interface List {
	id: number;
	text: string;
	tasks: ITask[];
}

export interface IAppState {
	lists: List[];
}

const appData: IAppState = {
	lists: [
		{
			id: 1,
			text: 'TODO',
			tasks: [
				{
					id: 5,
					text: 'Generate site dat'
				}
			]
		},
		{
			id: 2,
			text: 'Progress',
			tasks: [
				{
					id: 67,
					text: 'Update view'
				}
			]
		},
		{
			id: 3,
			text: 'Done',
			tasks: [
				{
					id: 67,
					text: 'Update view'
				}
			]
		}
	]
};

interface IAppStateContext {
	state: IAppState;
}

const AppStateContext = createContext<IAppStateContext>({} as IAppStateContext);

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
	return <AppStateContext.Provider value={{ state: appData }}>{children}</AppStateContext.Provider>;
};

export const useAppState = () => {
	return useContext(AppStateContext);
};
