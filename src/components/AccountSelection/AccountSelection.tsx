import BasicCard from '../BasicCard/BasicCard';
import BasicButton from '../Button/Button';
import { useNavigate } from 'react-router-dom';	
import BreadcrumbsBar from '../BreadcrumbsBar/BreadcrumbsBar';

const AccountSelection = () => {
	const navigate = useNavigate();

	const navigateToCustomerForm = () => {
		// 👇️ navigate to /customer-form
		navigate('/customer-form');
	};

	return (
		<>
			<BreadcrumbsBar currentStep={1} />

			<p style={{ margin: '30px 30px 30px 80px' }}>Select an Account</p>
			<div
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					marginLeft: 200,
				}}
			>
				<BasicCard accountType={'Savings'} />
				<BasicCard accountType={'Money Market'} />
				<BasicCard accountType={'Certificate of Deposit'} />
				<BasicCard accountType={'Spending'} />
			</div>

			<BasicButton
				textValue='Next'
				onClick={navigateToCustomerForm}
			/>
		</>
	);
};

export default AccountSelection;
