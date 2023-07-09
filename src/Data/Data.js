const xAxisData = [
	{ name: 'Jan', sales: 112_000 },
	{ name: 'Feb', sales: 99_000 },
	{ name: 'Mar', sales: 12_090 },
	{ name: 'Apr', sales: 99_000 },
	{ name: 'May', sales: 54_000 },
	{ name: 'Jun', sales: 85_000 },
	{ name: 'Jul', sales: 34_000 },
	{ name: 'Agu', sales: 18_598 },
	{ name: 'Sep', sales: 0 },
	{ name: 'Oct', sales: 73_078 },
	{ name: 'Nov', sales: 12_900 },
	{ name: 'Dev', sales: 97_000 },
];

const newMembers = [
	{
		id: 1,
		name: 'Alireza',
		family: 'Rezaei',
		job: 'Web Developer',
		profilePicture: 'public/Profile/Profile.png',
	},
	{
		id: 2,
		name: 'Zinat',
		family: 'Rezaei',
		job: 'Coach',
		profilePicture: 'public/Profile/Profile_women.jpg',
	},
	{
		id: 3,
		name: 'Majid',
		family: 'Moaedy',

		job: 'Designer',
		profilePicture: 'public/Profile/Profile_1.jpg',
	},
	{
		id: 4,
		name: 'Danw',
		family: 'Hakimi',

		job: 'Nothing',
		profilePicture: 'public/Profile/Profile_2.jpg',
	},
];

const transActions = [
	{
		id: 1,
		customer: 'Alireza Rezaei',
		avatar: 'public/Profile/Profile.png',
		date: '26 jun 2023',
		amount: 1340,
		status: 'Approved',
	},
	{
		id: 2,
		customer: 'Zinat Rezaei',
		avatar: 'public/Profile/Profile_women.jpg',
		date: '26 apr 2023',
		amount: 1200,
		status: 'Approved',
	},
	{
		id: 3,
		customer: 'Majid Moaedy',
		avatar: 'public/Profile/Profile_2.jpg',
		date: '6 sep 2023',
		amount: 1130,
		status: 'Pending',
	},
	{
		id: 4,
		customer: 'Danw Hakimi',
		avatar: 'public/Profile/Profile_1.jpg',
		date: '2 feb 2023',
		amount: 1210,
		status: 'Declined',
	},
];

export { xAxisData, newMembers, transActions };
