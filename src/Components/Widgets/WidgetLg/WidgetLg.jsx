import React from 'react';
import './WidgetLg.scss';
import { transActions } from '../../../Data/Data';

export default function WidgetLg() {
	const Button = ({ type }) => {
		return <button className={`widgetLg__button widgetLg__button--${type}`}>{type}</button>;
	};

	return (
		<div className='widgetLg'>
			<h3 className='widgetLg__title'>Latest TransAction</h3>
			<table className='widgetLg__table'>
				<tbody>
					<tr className='widgetLg__tr'>
						<th className='widgetLg__th--customer'>Customer</th>
						<th className='widgetLg__th'>Date</th>
						<th className='widgetLg__th'>Amount</th>
						<th className='widgetLg__th'>Status</th>
					</tr>
					{transActions.map((transaction) => {
						return (
							<tr className='widgetLg__tr' index={transaction.id} key={transaction.id}>
								<td className='widgetLg__user'>
									<img
										src={transaction.avatar}
										className='widgetLg__avatar'
										alt='User Avatar'
									/>
									<span className='widgetLg__name'>{transaction.customer}</span>
								</td>

								<td className='widgetLg__date'>{transaction.date}</td>
								<td className='widgetLg__amount'>${transaction.amount}</td>
								<td className='widgetLg__status'>
									<Button type={transaction.status} />
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
