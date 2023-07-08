import React from 'react';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, Tooltip } from 'recharts';
import './Chart.scss';

export default function Chart({ title, data, color, margin, xLabel, dataKey, grid }) {
	return (
		<div className='chart'>
			<h4 className='chart__title'>{title}</h4>
			<ResponsiveContainer width='100%' aspect={4}>
				<LineChart width={500} height={300} data={data} margin={margin}>
					{grid && <CartesianGrid strokeDasharray={`5 5`} stroke={`#e0dfdf`} />}
					<XAxis dataKey={xLabel} stroke={color} />
					<Tooltip />
					<Line type='monotone' dataKey={dataKey} stroke={color} activeDot={{ r: 8 }} />
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}
