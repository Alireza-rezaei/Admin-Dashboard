import Home from './Pages/Home/Home';
import Product from './Pages/Product/Product';
import UserList from './Pages/User/UserLists';
import NewUser from './Pages/NewUser/NewUser';
const routes = [
	{
		path: '/',
		element: <Home />,
		children: [
			{
				path: 'home',
				element: <Home />,
			},
		],
	},
	{ path: '/users/', element: <UserList /> },
	{ path: '/product/', element: <Product /> },
	{ path: '/newUser/', element: <NewUser /> },
	{ path: '*', element: 'Not Found 404 :)' },
];

export default routes;
