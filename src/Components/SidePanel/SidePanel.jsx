import './SidePanel.scss';
import { Link } from 'react-router-dom';
import {
	LineStyle,
	Timeline,
	TrendingUp,
	PermIdentity,
	Storefront,
	AttachMoney,
	BarChart,
	MailOutline,
	DynamicFeed,
	ChatBubbleOutline,
	WorkOutline,
	Report,
	PersonAddAlt,
} from '@mui/icons-material';
export default function SidePanel() {
	return (
		<div className='sidePanel'>
			<div className='sidePanel__wrapper'>
				<div className='sidePanel__content'>
					<div className='sidePanel__title'>
						<h3 className='sidePanel__title'>Dashboard</h3>
					</div>
					<ul className='sidePanel__lists'>
						<li className='sidePanel__lists--item active'>
							<Link className='sidePanel__link' to={`/home`}>
								<span className='sidePanel__icon'>
									<LineStyle className='sidePanel__icon-svg' />
								</span>
								Home
							</Link>
						</li>
						<li className='sidePanel__lists--item'>
							<span className='sidePanel__icon'>
								<Timeline className='sidePanel__icon-svg' />
							</span>
							Analytics
						</li>
						<li className='sidePanel__lists--item'>
							<span className='sidePanel__icon'>
								<TrendingUp className='sidePanel__icon-svg' />
							</span>
							Sales
						</li>
					</ul>
				</div>
				<div className='sidePanel__content'>
					<div className='sidePanel__title'>
						<h3 className='sidePanel__title'>Quick Menu</h3>
					</div>
					<ul className='sidePanel__lists'>
						<li className='sidePanel__lists--item'>
							<Link className='sidePanel__link' to={`/users`}>
								<span className='sidePanel__icon'>
									<PermIdentity className='sidePanel__icon-svg' />
								</span>
								Users
							</Link>
						</li>
						<li className='sidePanel__lists--item'>
							<Link className='sidePanel__link' to={`/newUser`}>
								<span className='sidePanel__icon'>
									<PersonAddAlt className='sidePanel__icon-svg' />
								</span>
								New User
							</Link>
						</li>
						<li className='sidePanel__lists--item'>
							<Link className='sidePanel__link' to={`/product`}>
								<span className='sidePanel__icon'>
									<Storefront className='sidePanel__icon-svg' />
								</span>
								Products
							</Link>
						</li>
						<li className='sidePanel__lists--item'>
							<span className='sidePanel__icon'>
								<AttachMoney className='sidePanel__icon-svg' />
							</span>
							Transactions
						</li>
						<li className='sidePanel__lists--item'>
							<span className='sidePanel__icon'>
								<BarChart className='sidePanel__icon-svg' />
							</span>
							Reports
						</li>
					</ul>
				</div>
				<div className='sidePanel__content'>
					<div className='sidePanel__title'>
						<h3 className='sidePanel__title'>Notifications</h3>
					</div>
					<ul className='sidePanel__lists'>
						<li className='sidePanel__lists--item'>
							<span className='sidePanel__icon'>
								<MailOutline className='sidePanel__icon-svg' />
							</span>
							Mail
						</li>
						<li className='sidePanel__lists--item'>
							<span className='sidePanel__icon'>
								<DynamicFeed className='sidePanel__icon-svg' />
							</span>
							FeedBack
						</li>
						<li className='sidePanel__lists--item'>
							<span className='sidePanel__icon'>
								<ChatBubbleOutline className='sidePanel__icon-svg' />
							</span>
							Messages
						</li>
					</ul>
				</div>
				<div className='sidePanel__content'>
					<div className='sidePanel__title'>
						<h3 className='sidePanel__title'>Staff</h3>
					</div>
					<ul className='sidePanel__lists'>
						<li className='sidePanel__lists--item'>
							<span className='sidePanel__icon'>
								<WorkOutline className='sidePanel__icon-svg' />
							</span>
							Manage
						</li>
						<li className='sidePanel__lists--item'>
							<span className='sidePanel__icon'>
								<Report className='sidePanel__icon-svg' />
							</span>
							Analytics
						</li>
						<li className='sidePanel__lists--item'>
							<span className='sidePanel__icon'>
								<PersonAddAlt className='sidePanel__icon-svg' />
							</span>
							Reports
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
