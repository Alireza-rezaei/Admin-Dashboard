import ROUTES from './Routes';
import { useRoutes } from 'react-router-dom';
import Header from './Components/Header/Header';
import SidePanel from './Components/SidePanel/SidePanel';
import './App.scss';

function App() {
	const routes = useRoutes(ROUTES);
	return (
		<>
			<Header />
			<div className='container'>
				<SidePanel />
				{routes}
			</div>
		</>
	);
}

export default App;
