import ROUTES from './Routes';
import { useRoutes } from 'react-router-dom';

function App() {
	const routes = useRoutes(ROUTES);
	return <div>{routes}</div>;
}

export default App;
