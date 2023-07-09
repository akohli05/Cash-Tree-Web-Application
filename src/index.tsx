import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header/Header';
import AccountSelectionScreen from './screens/AccountSelectionScreen';
import {
	createBrowserRouter,
	RouterProvider,
	useRouteError,
} from 'react-router-dom';
import CustomerScreen from './screens/CustomerScreen';
import SummaryScreen from './screens/SummaryScreen';
import ApplicationProvider from './context/ApplicationContext';
import ConfirmationScreen from './screens/ConfirmationScreen';

const router = createBrowserRouter([
	{
		path: '/',
		element: <AccountSelectionScreen />,
		errorElement: <ErrorBoundary />,
	},
	{
		path: '/customer-form',
		element: <CustomerScreen />,
	},
	{
		path: '/summary',
		element: <SummaryScreen />,
	},
	{
		path: '/confirmation',
		element: <ConfirmationScreen />,
	},
]);

function ErrorBoundary() {
	let error = useRouteError();
	console.error(error);
	// Uncaught ReferenceError: path is not defined
	return <div>Dang!</div>;
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Header />
		<ApplicationProvider>
			<RouterProvider router={router} />
		</ApplicationProvider>
	</React.StrictMode>
);
