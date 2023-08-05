// Function to send data to Firebase
async function sendDataToFirebase() {
	const products = [
		{ id: 1, productName: 'Laptop Asus rog 1332', price: '$1200', model: 'Asus', avatar: './public/Products/Laptop.jpg' },
		{ id: 2, productName: 'Headset GBL pro', price: '$900', model: 'GBL', avatar: './public/Products/Headset.jpg' },
		{
			id: 3,
			productName: 'Apple 14 Pro Max phone',
			price: '$999.99',
			model: 'Apple',
			avatar: './public/Products/Phone.jpg',
		},
		{
			id: 4,
			productName: 'Tablet Lenovo 4940g',
			price: '$1900',
			model: 'Lenovo',
			avatar: './public/Products/Tablet.jpg',
		},
		{
			id: 5,
			productName: 'Computer All in One Apple',
			price: '$3000',
			model: 'Apple',
			avatar: './public/Products/Computer.jpg',
		},
	];
	try {
		const response = await fetch('https://dashboard-admin-69a2c-default-rtdb.firebaseio.com/products.json', {
			method: 'POST',
			body: JSON.stringify(products),
		});

		if (!response) {
			throw new Error('Failed to send data to Firebase.');
		}

		console.log('Data sent successfully!');
	} catch (error) {
		console.error(error);
	}
}

// Call the function to send data to Firebase

export default sendDataToFirebase;
