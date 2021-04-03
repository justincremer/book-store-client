import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Button, FormControl, Grid, Input } from '@material-ui/core';

type item = {
	id: string;
	value: string;
};

const Todo = () => {
	const [items, setItems]: [Array<item>, any] = useState([]);
	const [value, setValue]: [string, any] = useState('');

	const update = (i: Array<item>) => setItems(i);
	const add = (i: string) => {
		let copy: Array<item> = items;
		const newItem: item = {
			id: uuid(),
			value: i,
		};

		copy.push(newItem);
		update(copy);
	};

	const changeHandler = (i: string) => setValue(i);
	const submissionHandler = (i: string) => {
		add(i);
		setValue('');
	};

	const ItemListView = () => (
		<div>
			{items.map((i) => (
				<p>{i.value}</p>
			))}
		</div>
	);

	return (
		<div>
			<Grid
				container
				direction="column"
				justify="flex-start"
				alignItems="center"
			>
				<FormControl>
					<Input
						type="text"
						placeholder="Enter item..."
						value={value}
						onChange={(e) => changeHandler(e.target.value)}
					/>
					<Button onClick={() => submissionHandler(value)}>
						Submit
					</Button>
					<ItemListView />
				</FormControl>
			</Grid>
		</div>
	);
};

export { Todo };
