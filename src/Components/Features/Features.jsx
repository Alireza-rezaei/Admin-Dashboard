import './Features.scss';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';

export default function Features() {
	return (
		<div className='features'>
			<div className='features__item'>
				<span className='features__title'>Revenue</span>
				<div className='features__content'>
					<span className='features__money'>$2,415</span>
					<span className='features__rate'>
						-11.4 <ArrowDownward className='features__icon features__negative' />
					</span>
				</div>
				<span className='features__description'>Compared To Last Month</span>
			</div>
			<div className='features__item'>
				<span className='features__title'>Sales</span>
				<div className='features__content'>
					<span className='features__money'>$4,415</span>
					<span className='features__rate'>
						-1.4 <ArrowDownward className='features__icon features__negative' />
					</span>
				</div>
				<span className='features__description'>Compared To Last Month</span>
			</div>
			<div className='features__item'>
				<span className='features__title'>Cost</span>
				<div className='features__content'>
					<span className='features__money'>$2,225</span>
					<span className='features__rate'>
						+2.4 <ArrowUpward className='features__icon' />
					</span>
				</div>
				<span className='features__description'>Compared To Last Month</span>
			</div>
		</div>
	);
}
