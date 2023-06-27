import Features from '../../Components/Features/Features';
import Chart from './../../Components/Chart/Chart';
import { xAxisData } from '../../Data/Data.js';
import './Home.scss';

export default function Home() {
	return (
		<div className='home'>
			<Features />
			<Chart
				data={xAxisData}
				title={`User Analytics`}
				color={`#8884d8`}
				margin={{
					top: 10,
					right: 30,
					left: 7,
					bottom: 5,
				}}
				dataKey={`sales`}
				xLabel={`name`}
				grid={true}
			/>
		</div>
	);
}
