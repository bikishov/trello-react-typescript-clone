import React from 'react';
import AddNewItem from './AddNewItem';
import Card from './Card';
import { Column } from './Column';
import { AppContainer } from './styles';

function App() {
	return (
		<AppContainer>
			<Column text="To Do">
				<Card text="Create" />
			</Column>
			<Column text="In Progress">
				<Card text="Learn" />
			</Column>
			<Column text="Done">
				<Card text="Begin" />
			</Column>
			<AddNewItem toggleButtonText="+ Create list" onAdd={console.log} />
		</AppContainer>
	);
}

export default App;
