import React from 'react';
import ReactDOM from 'react-dom/client';
import AccountSelection from '../components/primary/AccountSelection';
import Header from '../components/secondary/Header';
import BreadcrumbsBar from '../components/secondary/BreadcrumbsBar';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Header />

		<BreadcrumbsBar currentStep={1} />

		<AccountSelection />
	</React.StrictMode>
);
