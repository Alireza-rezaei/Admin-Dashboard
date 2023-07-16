import { useState } from 'react';
import { userRows } from '../../Data/Data';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

import './UserList.scss';
import { Link } from 'react-router-dom';
import { DeleteOutline, EditOutlined } from '@mui/icons-material';
export default function UserList() {
	const [rows, setRows] = useState(userRows);

	const userDeleteHandler = (userID) => {
		const filterUsers = rows.filter((user) => {
			return user.id !== userID;
		});
		setRows(filterUsers);
	};

	const columns = [
		{ field: 'id', headerName: 'ID', width: 90 },
		{
			field: 'user',
			headerName: 'User',
			width: 200,
			editable: false,
			renderCell: (params) => {
				return (
					<Link className='userList__link' to=''>
						<div className='userList__user'>
							<img src={params.row.avatar} alt='User Avatar' className='userList__avatar' />
							<span className='userList__name'>{params.row.userName}</span>
						</div>
					</Link>
				);
			},
		},
		{
			field: 'email',
			headerName: 'Email',
			width: 200,
			editable: false,
		},
		{
			field: 'status',
			headerName: 'Status',
			width: 120,
		},
		{
			field: 'phone',
			headerName: 'Phone Number',
			width: 150,
		},
		{
			field: 'transAction',
			headerName: 'TransAction',
			width: 100,
		},
		{
			field: 'actions',
			headerName: 'Actions',
			width: 150,
			renderCell: (params) => {
				return (
					<>
						<Link to={`/user/${params.row.id}`} className='userList__link--icon'>
							<button className='userList__icon userList__icon--edit'>
								<EditOutlined />
							</button>
						</Link>
						<Link to='' className='userList__link--icon userList__edit'>
							<button
								onClick={() => userDeleteHandler(params.row.id)}
								className='userList__icon userList__icon--delete'
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
		<div className='userList'>
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
