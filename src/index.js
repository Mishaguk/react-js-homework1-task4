import React from 'react';
import ReactDOM from 'react-dom';



import TransactionHistory from './components/task-4/TransactionHistory';
import transactions from './components/task-4/transactions.json';                          // |task4
ReactDOM.render(
	<TransactionHistory items={transactions} />,
	document.getElementById('task4')
);
