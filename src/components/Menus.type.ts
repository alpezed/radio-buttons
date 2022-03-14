export type MenuItemProps = {
	id: string;
	value: string;
};

export type MenuItemsProps = {
	menus: MenuItemProps[][];
	rules: {
		[key: number]: number[];
	};
};
