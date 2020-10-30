import * as React from 'react';
import AddNewItem from './AddNewItem';
import { ColumnContainer, ColumnTitle } from './styles';

export interface IColumnProps {
	index: number;
	text?: string;
}

export const Column = ({ text, children }: React.PropsWithChildren<IColumnProps>) => {
	return (
		<ColumnContainer>
			<ColumnTitle>{text}</ColumnTitle>
			{children}
			<AddNewItem dark toggleButtonText="+ Add Task" onAdd={console.log} />
		</ColumnContainer>
	);
};
