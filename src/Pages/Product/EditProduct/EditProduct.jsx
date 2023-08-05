import React, { useEffect, useState } from 'react';
import './EditProduct.scss';
import { Link, useParams } from 'react-router-dom';
import { Add, Diversity3, Publish } from '@mui/icons-material';
import Chart from './../../../Components/Chart/Chart';
// import { products } from '../../../Data/Data';
import Loader from '../../../Components/Loader/Loader';
import { xAxisData } from '../../../Data/Data';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function EditProduct() {
	const { productID } = useParams();
	const [productXAxisData, setProductXAxisData] = useState(null);
	const [error, setError] = useState('');
	const [products, setProducts] = useState([]);
	const [activeProduct, setActiveProduct] = useState(null);

	const fetchData = async () => {
		try {
			const [xAxisResponse, productsResponse] = await Promise.all([
				fetch('https://dashboard-admin-69a2c-default-rtdb.firebaseio.com/productXAxisData.json'),
				fetch('https://dashboard-admin-69a2c-default-rtdb.firebaseio.com/products.json'),
			]);

			if (!xAxisResponse.ok || !productsResponse.ok) {
				setError('Please Turn on Vpn And Try Again!');
				throw new Error('Network response was not ok');
			}

			const [xAxisData, productsData] = await Promise.all([xAxisResponse.json(), productsResponse.json()]);

			setProductXAxisData(Object.values(xAxisData)[0]);
			setProducts(Object.values(productsData)[0]);
		} catch (error) {
			console.log(error);
			setError('Please Turn on Vpn And Try Again!');
		}
	};

	// Call the function inside a useEffect hook to fetch data when the component mounts (or whenever you need it).
	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		if (productID && products) {
			const hasProduct = products.find((product) => product.id === Number(productID));
			setActiveProduct(hasProduct ? hasProduct : null);
		}
	}, [products]);

	return (
		<>
			{products && xAxisData && activeProduct ? (
				<>
					{productXAxisData && (
						<div className='editProduct'>
							<div className='editProduct__header'>
								<h1 className='editProduct__title'>Product</h1>
								<Link to={`/newProduct`} className='link'>
									<button className='editProduct__addProduct--btn'>
										Create <Add />
									</button>
								</Link>
							</div>

							<div className='editProduct__container'>
								<div className='editProduct__topSection'>
									<div className='editProduct__insight'>
										{console.log(productXAxisData)}
										<Chart
											title={`Sale In Month`}
											data={productXAxisData}
											dataKey={`sales`}
											xLabel={`name`}
											grid
											margin={`0`}
											color={`#8884d8`}
										/>
									</div>
									{activeProduct && (
										<div className='editProduct__details '>
											<div>
												<div className='editProduct__infos'>
													<img
														src={`.${activeProduct.avatar}`}
														className='editProduct__avatar'
														alt=''
													/>
													<span className='editProduct__name'>
														{activeProduct.productName}
													</span>
												</div>

												<div className='editProduct__data'>
													<div className='editProduct__item'>
														<div className='editProduct__key'>
															<span>ID:</span>
														</div>
														<div className='editProduct__value'>
															<span>{activeProduct.id}</span>
														</div>
													</div>

													<div className='editProduct__item'>
														<div className='editProduct__key'>
															<span>Product Name :</span>
														</div>
														<div className='editProduct__value'>
															<span>{activeProduct.productName}</span>
														</div>
													</div>

													<div className='editProduct__item'>
														<div className='editProduct__key'>
															<span>Sales :</span>
														</div>
														<div className='editProduct__value'>
															<span>$66000</span>
														</div>
													</div>

													<div className='editProduct__item'>
														<div className='editProduct__key'>
															<span>Is Active :</span>
														</div>
														<div className='editProduct__value'>
															<span>yes</span>
														</div>
													</div>

													<div className='editProduct__item'>
														<div className='editProduct__key'>
															<span>In Stock:</span>
														</div>
														<div className='editProduct__value'>
															<span>No</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									)}
								</div>

								<div className='editProduct__form--container'>
									<form action='' className='editProduct__form'>
										<div className='editProduct__leftForm'>
											<div className='editProduct__form--group'>
												<label
													htmlFor='editProduct__name'
													className='editProduct__form--label'
												>
													Product Name :
												</label>
												<input
													type='text'
													id='editProduct__name'
													className='editProduct__form--name editProduct__input'
													defaultValue={activeProduct.productName}
												/>
												<div className='editProduct__neonEffect'></div>
											</div>
											<div className='editProduct__form--group'>
												<label
													htmlFor='editProduct__form--stock'
													className='editProduct__form--label'
												>
													In Stock:
												</label>
												<select
													name=''
													id='editProduct__form--stock'
													className='editProduct__select'
												>
													<option value='yes'>yes</option>
													<option value='no'>no</option>
												</select>
												<ArrowDropDownIcon className='editProduct__arrowDownIcon' />
											</div>
											<div className='editProduct__form--group'>
												<label
													htmlFor='editProduct__form--active'
													className='editProduct__form--label'
												>
													Is Active:
												</label>
												<select
													name=''
													id='editProduct__form--active'
													className='editProduct__select'
												>
													<option value='yes'>yes</option>
													<option value='no'>no</option>
												</select>
												<ArrowDropDownIcon className='editProduct__arrowDownIcon' />
											</div>
										</div>
										<div className='editProduct__rightForm'>
											<div className='editProduct__uploader'>
												<img
													src={`.${activeProduct.avatar}`}
													alt='Upload Product Avatar '
													className='editProduct__uploaderAvatar'
													style={{ width: '20rem' }}
												/>
												<label htmlFor='File'>
													<Publish className='editProduct__uploaderIcon' />
												</label>
												<input
													type='file'
													name=''
													id='File'
													className='editProduct__inputUploader'
												/>
											</div>
											<button className='editProduct__submitBtn'>
												Upload (Edit){' '}
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					)}
				</>
			) : (
				<div className='loader'>
					<Loader />
					<h4 className='loader__warning'>{error}</h4>
				</div>
			)}
		</>
	);
}
