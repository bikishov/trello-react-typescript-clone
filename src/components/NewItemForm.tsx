import * as React from 'react';
import { NewItemButton, NewItemFormContainer, NewItemInput } from '../styles/styles';
import { useFocus } from '../hooks/useFocus';

interface INewItemFormProps {
	onAdd(text: string): void;
}

export const NewItemForm: React.FunctionComponent<INewItemFormProps> = ({ onAdd }) => {
	const [ text, setText ] = React.useState('');
	const inputRef = useFocus();

	return (
		<NewItemFormContainer>
			<NewItemInput
				onKeyDown={(e) => {
					if (e.key === 'Enter') onAdd(text);
				}}
				ref={inputRef}
				onChange={(e) => setText(e.target.value)}
			/>
			<NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
		</NewItemFormContainer>
	);
};
