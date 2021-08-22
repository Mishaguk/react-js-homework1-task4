import React from 'react';
import styles from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => (
	<div className={styles.transactionHistory}>
		<thead>
			<tr className={styles.info}>
				<th className={styles.type}>Type</th>
				<th className={styles.amount}>Amount</th>
				<th className={styles.currency}>Currency</th>
			</tr>
		</thead>
		<tbody>
			{items.map(item => (
				<tr key={item.id}>
					<td className={styles.type}>{item.type}</td>
					<td className={styles.amount}>{item.amount}</td>
					<td className={styles.currency}>{item.currency}</td>
				</tr>
			))}
		</tbody>
	</div>
);

TransactionHistory.propTypes = {
	type: PropTypes.string.isRequired,
	amount: PropTypes.string.isRequired,
	currency: PropTypes.string.isRequired,
};

export default TransactionHistory;
