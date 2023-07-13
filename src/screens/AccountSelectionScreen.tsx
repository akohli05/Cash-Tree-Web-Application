import { useNavigate } from 'react-router-dom';
import AccountSelectionForm from '../components/AccountSelectionForm/AccountSelectionForm';
import BreadcrumbsBar from '../components/BreadcrumbsBar/BreadcrumbsBar';
import { useContext } from 'react';
import { AccountType, ApplicationContext } from '../context/ApplicationContext';

const AccountSelectionScreen = () => {
	const navigate = useNavigate();
	//import useContext save the new object here
	const applicationContext = useContext(ApplicationContext);
	
	//Handles the on submit action
	const onSubmit = (accountTypes: AccountType[]) => {
		applicationContext.updateAccountTypes(accountTypes);

		//navigate to /customer-form
		navigate('/customer-form');
	};
	return (
		<>
			<BreadcrumbsBar currentStep={1} />
			<AccountSelectionForm onSave={onSubmit} />
		</>
	);
};

export default AccountSelectionScreen;
