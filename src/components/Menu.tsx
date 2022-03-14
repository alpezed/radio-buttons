import React from 'react';

import Radio from './Radio';

interface MenuIProps {
	name: string;
	id: string;
	index: number;
	selected: string;
	selectedChildren: string;
	fieldName: string;
	rules: number[];
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Menu: React.FC<MenuIProps> = ({
	name,
	id,
	rules,
	index,
	selected,
	selectedChildren,
	fieldName,
	onChange,
}) => {
	const isDisabled = !selected
		? index !== 0
			? true
			: false
		: rules && rules.includes(Number(id));

	return (
		<Radio
			checked={
				fieldName === 'parent' ? selected === id : selectedChildren === id
			}
			value={id}
			label={name}
			name={fieldName}
			disabled={isDisabled}
			onChange={onChange}
		/>
	);
};

export default Menu;
