import { useState } from 'react';
import { products } from '../../Data/Data';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import './Product.scss';
import { Link } from 'react-router-dom';
import { DeleteOutline, EditOutlined } from '@mui/icons-material';

export default function Product() {
	const [rows, setRows] = useState(products);

	const productDeleteHandler = (productID) => {
		const filterProducts = rows.filter((product) => {
			return product.id !== productID;
		});
		setRows(filterProducts);
	};

	const columns = [
		{ field: 'id', headerName: 'ID', width: 90 },
		{
			field: 'productName',
			headerName: 'Product Name',
			width: 200,
			editable: false,
			renderCell: (params) => {
				return (
					<Link className='product__link' to=''>
						<div className='product__user'>
							<img src={params.row.avatar} alt='User Avatar' className='product__avatar' />
							<span className='product__name'>{params.row.productName}</span>
						</div>
					</Link>
				);
			},
		},
		{
			field: 'price',
			headerName: 'Price',
			width: 150,
			editable: false,
		},
		{
			field: 'model',
			headerName: 'Brand',
			width: 120,
		},

		{
			field: 'actions',
			headerName: 'Actions',
			width: 150,
			renderCell: (params) => {
				return (
					<>
						<Link to={`/product/${params.row.id}`} className='product__link--icon'>
							<button className='product__icon product__icon--edit'>
								<EditOutlined />
							</button>
						</Link>
						<Link to='' className='product__link--icon product__edit'>
							<button
								onClick={() => productDeleteHandler(params.row.id)}
								className='product__icon product__icon--delete'
							>
								<DeleteOutline />
							</button>
						</Link>
					</>
				);
			},
		},
	];

	return (
		<div className='product'>
			<Box sx={{ height: 400, width: '100%' }}>
				<DataGrid
					rows={rows}
					columns={columns}
					initialState={{
						pagination: {
							paginationModel: {
								pageSize: 4,
							},
						},
					}}
					sx={{
						boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px',
						outline: 'none',
						border: 'none',
						'& .MuiDataGrid-columnHeaderTitle': {
							fontSize: '1.3rem',
							fontWeight: 600,
						},
						'& .MuiDataGrid-cell:focus ,.MuiDataGrid-cell:focus-within': {
							outline: 'none !important',
						},
					}}
					pageSizeOptions={[5]}
					checkboxSelection
					disableRowSelectionOnClick
				/>
			</Box>
		</div>
	);
}
