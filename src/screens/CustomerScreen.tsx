import { useNavigate } from 'react-router-dom';
import BreadcrumbsBar from '../components/BreadcrumbsBar/BreadcrumbsBar';
import CustomerForm from '../components/CustomerForm/CustomerForm';
import { ApplicationContext, Customer } from '../context/ApplicationContext';
import { useContext } from 'react';

const CustomerScreen = () => {
	const navigate = useNavigate();
	const applicationContext = useContext(ApplicationContext);

	const onSubmit = (customer: Customer) => {
		applicationContext.updateCustomer(customer);

		let {
			address,
			addressAdditional,
			city,
			state,
			zipcode,
			isHomeandMailingSame,
			addressMailing,
			addressAdditionalMailing,
			cityMailing,
			stateMailing,
			zipcodeMailing,
		} = applicationContext.state.customer;

		if (isHomeandMailingSame === 'Yes') {
			addressMailing = address;
			addressAdditionalMailing = addressAdditional;
			cityMailing = city;
			stateMailing = state;
			zipcodeMailing = zipcode;
		}

		applicationContext.updateCustomer(customer);

		//navigate to /summary
		navigate('/summary');
	};

	return (
		<>
			<BreadcrumbsBar currentStep={2} />
			<CustomerForm onSave={onSubmit} />
		</>
	);
};

export default CustomerScreen;
