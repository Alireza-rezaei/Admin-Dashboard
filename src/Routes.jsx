import Home from './Pages/Home/Home';
import Product from './Pages/Product/Product';
import UserList from './Pages/User/UserLists';
const routes = [
	{ path: '/', element: <Home /> },
	{ path: '/users/', element: <UserList /> },
	{ path: '/product/', element: <Product /> },
	{ path: '*', element: 'Not Found 404 :)' },
];

export default routes;
