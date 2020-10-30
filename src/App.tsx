import React from 'react';
import AddNewItem from './AddNewItem';
import { useAppState } from './AppStateContext';
import { Column } from './Column';
import { AppContainer } from './styles';

const App = () => {
	const { state } = useAppState();
	return (
		<AppContainer>
			{state.lists.map((list, i) => <Column text={list.text} key={list.id} index={i} />)}
			<AddNewItem toggleButtonText="+ Create list" onAdd={console.log} />
		</AppContainer>
	);
};

export default App;
