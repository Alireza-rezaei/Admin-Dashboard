import React from 'react';
import './WidgetSm.scss';
import { newMembers } from '../../../Data/Data';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function WidgetSm() {
	return (
		<div className='widget'>
			<span className='widget__title'>New Join Members</span>
			<ul className='widget__list'>
				{newMembers.map((user) => {
					return (
						<li className='widget__list--item' key={user.id}>
							<img src={user.profilePicture} className='widget__profile' alt='New User Profile' />
							<div className='widget__user'>
								<span className='widget__user--name'>{`${user.name} ${user.family}`}</span>
								<span className='widget__user--job'> {user.job} </span>
							</div>
							<button className='widget__viewProfile'>
								<VisibilityIcon className='widget__icon'></VisibilityIcon>
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
