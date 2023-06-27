import React from 'react';
import ReactDOM from 'react-dom/client';
import AccountSelection from '../components/AccountSelection/AccountSelection';
import Header from '../components/Header/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CustomerScreen from './CustomerScreen';
import SummaryScreen from './SummaryScreen';

const router = createBrowserRouter([
	{
		path: '/',
		element: <AccountSelection />,
	},
	{
		path: '/customer-form',
		element: <CustomerScreen />,
	},
	{
		path: '/summary',
		element: <SummaryScreen />,
	},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Header />

		<RouterProvider router={router} />
	</React.StrictMode>
);
