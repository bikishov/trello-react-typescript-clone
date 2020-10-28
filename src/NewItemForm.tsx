import * as React from 'react';
import { NewItemButton, NewItemFormContainer, NewItemInput } from './styles';
import { useFocus } from './useFocus';

interface INewItemFormProps {
	onAdd(text: string): void;
}

const NewItemForm: React.FunctionComponent<INewItemFormProps> = ({ onAdd }) => {
	const [ text, setText ] = React.useState('');
	const inputRef = useFocus();

	return (
		<NewItemFormContainer>
			<NewItemInput ref={inputRef} onChange={(e) => setText(e.target.value)} />
			<NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
		</NewItemFormContainer>
	);
};

export default NewItemForm;
