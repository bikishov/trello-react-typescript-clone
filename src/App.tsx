import React from 'react';
import { Column } from './components/Column';
import { AppContainer } from './styles/styles';
import { AddNewItem } from './components/AddNewItem';
import { DragItem } from './types/DragItem';
import CustomDragLayer from './components/CustomDragLayer';
import { useAppState } from './store/state';

interface Task {
	id: string;
	text: string;
}

interface List {
	id: string;
	text: string;
	tasks: Task[];
}

export interface AppState {
	draggedItem: DragItem | undefined;
	lists: List[];
}

const App = () => {
	const { state, dispatch } = useAppState();

	return (
		<AppContainer>
			<CustomDragLayer />
			{state.lists.map((list, i) => <Column id={list.id} text={list.text} key={list.id} index={i} />)}
			<AddNewItem
				toggleButtonText="+ Add another list"
				onAdd={(text) => dispatch({ type: 'ADD_LIST', payload: text })}
			/>
		</AppContainer>
	);
};

export default App;
