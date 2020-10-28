import * as React from 'react';
import NewItemForm from './NewItemForm';
import { AddItemButton } from './styles';

interface IAddNewItemProps {
	onAdd(text: string): void;
	toggleButtonText: string;
	dark?: boolean;
}

const AddNewItem: React.FunctionComponent<IAddNewItemProps> = (props) => {
	const [ show, setShow ] = React.useState(false);
	const { onAdd, toggleButtonText, dark } = props;

	if (show) {
		return (
			<NewItemForm
				onAdd={(text) => {
					onAdd(text);
					setShow(false);
				}}
			/>
		);
	}

	return (
		<AddItemButton dark={dark} onClick={() => setShow(true)}>
			{toggleButtonText}
		</AddItemButton>
	);
};

export default AddNewItem;
