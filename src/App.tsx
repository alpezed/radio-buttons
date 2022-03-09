import { useState } from 'react';
import './App.css';

import Radio from './components/Radio';

type RadioItemProps = {
	id: string;
	value: string;
};

type RadioItemsProps = {
	menus: RadioItemProps[][];
	rules: {
		[key: number]: number[];
	};
};

const data: RadioItemsProps = {
	menus: [
		// first group of radio-buttons
		[
			{ id: '101', value: 'Vegetarian' },
			{ id: '102', value: 'Nut allergy' },
			{ id: '103', value: 'Halal' },
		],
		// second group of radio-buttons
		[
			{ id: '201', value: 'Cashew chicken' },
			{ id: '202', value: 'Sweet and sour pork' },
			{ id: '203', value: 'Stir fried Tofu' },
			{ id: '204', value: 'Vegetable fried rice' },
			{ id: '205', value: 'Pad Thai' },
			{ id: '206', value: 'Massaman beef' },
		],
		// third group of radio-buttons
		[
			{ id: '301', value: 'Peanut sauce' },
			{ id: '302', value: 'Oyster sauce' },
			{ id: '303', value: 'Vegetable spring rolls' },
			{ id: '304', value: 'Steamed rice' },
		],
	],
	rules: {
		// 'Vegetarian' is NOT compatible with 'Cashew chicken', 'Sweet and sour pork', 'Massaman beef', 'Oyster sauce'
		101: [201, 202, 206, 302],
		// 'Nut allergy' is NOT compatible with 'Cashew chicken', 'Peanut sauce',
		102: [201, 301],
		// 'Halal' is NOT compatible with 'Sweet and sour pork',
		103: [202],
		// 'Vegetable fried rice' is NOT compatible with 'Steamed rice' (you don't need more rice... carb overload),
		204: [304],
		// 'Pad thai' is NOT compatible with 'Steamed rice' (Pad thai comes with noodles),
		205: [304],
	},
};

function App() {
	const [selected, setSelected] = useState('');

	const selectedOption = Number(selected);
	const currentRules = selected ? data.rules[selectedOption] : [];

	return (
		<div className='App'>
			<div className='App__menus'>
				<h3 className='App__menus--title'>Menus</h3>
				<div className='App__menus--body'>
					{data.menus.map((items: RadioItemProps[], index) => {
						const lists = items.map((item: RadioItemProps) => {
							const isDisabled = !selected
								? index !== 0
									? true
									: false
								: currentRules && currentRules.includes(Number(item.id));
							return (
								<Radio
									value={item.id}
									label={item.value}
									disabled={isDisabled}
									onChange={e => setSelected(e.target.value)}
								/>
							);
						});
						return lists;
					})}
				</div>
			</div>
		</div>
	);
}

export default App;
