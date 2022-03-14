import './App.css';

import data from './data';

import Menus from './components/Menus';

function App() {
	return (
		<div className='App'>
			<div className='App__menus'>
				<h3 className='App__menus--title'>Menus</h3>
				<Menus data={data} />
			</div>
		</div>
	);
}

export default App;
