import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from '../components/secondary/Header';
import BreadcrumbsBar from '../components/secondary/BreadcrumbsBar';
import CustomerForm from '../components/primary/CustomerForm';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Header />

		<BreadcrumbsBar currentStep={2} />
		<CustomerForm />
	</React.StrictMode>
);
