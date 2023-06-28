import BasicCard from '../BasicCard/BasicCard';
import BasicButton from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import BreadcrumbsBar from '../BreadcrumbsBar/BreadcrumbsBar';


const AccountSelection = () => {
	let accountTypeSelected: string = '';

	const navigate = useNavigate();

	const navigateToCustomerForm = () => {
		// 👇️ navigate to /customer-form
		navigate('/customer-form');
	};

	const printSelectedValue = (selectedAccount: string) => {
		console.log(selectedAccount);
		accountTypeSelected = selectedAccount;
		console.log(accountTypeSelected + '1');
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
				<BasicCard
					accountType={'Savings'}
					onClick={printSelectedValue}
				/>
				<BasicCard
					accountType={'Money Market'}
					onClick={printSelectedValue}
				/>
				<BasicCard
					accountType={'Certificate of Deposit'}
					onClick={printSelectedValue}
				/>
				<BasicCard
					accountType={'Spending'}
					onClick={printSelectedValue}
				/>
			</div>

			<BasicButton
				textValue='Next'
				onClick={navigateToCustomerForm}
			/>
		</>
	);
};

export default AccountSelection;
