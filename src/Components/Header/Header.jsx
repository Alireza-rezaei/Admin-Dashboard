import { Link } from 'react-router-dom';
import Logo from './../../../public/Logo/Logo.png';
import Profile from './../../../public/Profile/Profile.png';
import './Header.scss';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
export default function Header() {
	return (
		<div className='header'>
			<div className='header__wrapper'>
				<div className='header__brand'>
					<Link className='header__link' to='/'>
						<img className='header__img' src={Logo} alt='logo' />
					</Link>
				</div>

				<div className='header__menu'>
					<div className='header__notifications header__nav'>
						<Link className='header__link' to='/notifications'>
							<NotificationsIcon className='header__icon' />
							<span className='header__badge'>
								<span className='header__badge--count'>2</span>
							</span>
						</Link>
					</div>
					<div className='header__Languages header__nav'>
						<Link className='header__link' to='/languages'>
							<LanguageIcon className='header__icon' />
							<span className='header__badge'>
								<span className='header__badge--count'>2</span>
							</span>
						</Link>
					</div>
					<div className='header__setting header__nav'>
						<Link className='header__link' to='/settings'>
							<SettingsIcon className='header__icon' />
						</Link>
					</div>
					<div className='header__profile'>
						<Link className='header__link' to='/profile'>
							<img className='header__avatar' src={Profile} alt='' />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
