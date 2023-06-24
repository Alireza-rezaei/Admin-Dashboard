import ROUTES from './Routes';
import { useRoutes } from 'react-router-dom';
import Header from './Components/Header/Header';

function App() {
	const routes = useRoutes(ROUTES);
	return (
		<>
			<Header />
			{routes}
		</>
	);
}

export default App;
