import BreadcrumbsBar from '../components/BreadcrumbsBar/BreadcrumbsBar';
import CustomerForm from '../components/CustomerForm/CustomerForm';

const CustomerScreen = () => {
	return (
		<>
			<BreadcrumbsBar currentStep={2} />
			<CustomerForm />
		</>
	);
};

export default CustomerScreen;
