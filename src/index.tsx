import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { AppStateProvider } from './store/state';

ReactDOM.render(
	<DndProvider backend={HTML5Backend}>
		<AppStateProvider>
			<App />
		</AppStateProvider>
	</DndProvider>,
	document.getElementById('root')
);
