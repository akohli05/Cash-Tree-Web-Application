import AccountSelectionForm from '../components/AccountSelectionForm/AccountSelectionForm';
import BreadcrumbsBar from '../components/BreadcrumbsBar/BreadcrumbsBar';

const AccountSelectionScreen = () => {
	return (
		<>
			<BreadcrumbsBar currentStep={1} />
			<AccountSelectionForm />
		</>
	);
};

export default AccountSelectionScreen;
