import BasicCard from '../BasicCard/BasicCard';
import BasicButton from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import BreadcrumbsBar from '../BreadcrumbsBar/BreadcrumbsBar';
import { FormContainer, useForm } from 'react-hook-form-mui';

const AccountSelection = () => {
	let accountTypeSelected: string = '';

	const navigate = useNavigate();

	const navigateToCustomerForm = () => {
		// 👇️ navigate to /customer-form
		navigate('/customer-form');
	};

	const printSelectedValue = (selectedAccount: string) => {
		accountTypeSelected = selectedAccount;
	};

	//Form and context set up
	const accountFormContext = useForm<{
		accountType: string;
	}>({
		defaultValues: {
			accountType: accountTypeSelected,
		},
	});

	return (
		<FormContainer
			formContext={accountFormContext}
			onSuccess={(data) => console.log(data)}
		>
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
		</FormContainer>
	);
};

export default AccountSelection;
