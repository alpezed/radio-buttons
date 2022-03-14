import { useState } from 'react';

import Menu from './Menu';

import { MenuItemsProps, MenuItemProps } from './Menus.type';

const INITIAL_ITEMS = ['101', '102', '103'];

type Props = {
	data: MenuItemsProps;
};

const Menus = ({ data }: Props): JSX.Element => {
	const [selectedParent, setSelectedParent] = useState<string>('');
	const [selectedChildren, setSelectedChildren] = useState<string>('');

	const selectedOption = Number(selectedParent);
	const rules = selectedParent ? data.rules[selectedOption] : [];

	const onSelectItem = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const value = e.target.value;

		if (INITIAL_ITEMS.includes(value)) {
			setSelectedParent(value);

			/**
			 * Reset children selection when parent items changed
			 */
			setSelectedChildren('');
		} else {
			setSelectedChildren(value);
		}
	};

	const menus = data.menus.map((items: MenuItemProps[], index) => {
		const lists = items.map((item: MenuItemProps) => {
			return (
				<Menu
					id={item.id}
					index={index}
					rules={rules}
					name={item.value}
					selected={selectedParent}
					selectedChildren={selectedChildren}
					fieldName={
						['101', '102', '103'].includes(item.id) ? 'parent' : 'child'
					}
					onChange={onSelectItem}
				/>
			);
		});
		return lists;
	});

	return <div className='App__menus--body'>{menus}</div>;
};

export default Menus;
