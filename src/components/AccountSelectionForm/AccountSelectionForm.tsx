import { useNavigate } from 'react-router-dom';
import { FormContainer, useForm } from 'react-hook-form-mui';
import { styled } from '@mui/material/styles';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import { Box } from '@mui/material';
import BasicButton from '../Button/Button';
import BasicCard from '../BasicCard/BasicCard';
import {
	AccountType,
	ApplicationContext,
} from '../../context/ApplicationContext';
import { useContext } from 'react';

const StyledBox = styled(Box)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',

	[theme.breakpoints.down('md')]: {
		margin: 'auto',
		padding: 30,
	},
}));

const AccountSelectionForm = () => {
	const navigate = useNavigate();
	//import useContext save the new object here
	const applicationContext = useContext(ApplicationContext);

	//Form and context set up
	const accountFormContext = useForm<AccountType[]>({});

	const { handleSubmit } = accountFormContext;

	//Handles the on submit action
	const onSubmit = (accountTypes: AccountType[]) => {
		applicationContext.updateAccountTypes(accountTypes);

		//navigate to /customer-form
		navigate('/customer-form');
	};

	return (
		<StyledBox>
			<FormContainer
				formContext={accountFormContext}
				handleSubmit={handleSubmit((data) => onSubmit(data))}
				onError={(error) => console.log(error)}
			>
				<h4>Select an Account</h4>
				<ButtonGroup
					name='accountTypes'
					options={[
						{
							id: 'savings',
							label: <BasicCard accountType={'Savings'} />,
						},
						{
							id: 'moneyMarket',
							label: <BasicCard accountType={'Money Market'} />,
						},
						{
							id: 'cd',
							label: <BasicCard accountType={'Certificate of Deposit'} />,
						},
						{
							id: 'spending',
							label: <BasicCard accountType={'Spending'} />,
						},
					]}
				/>
				<BasicButton text='Next' />
			</FormContainer>
		</StyledBox>
	);
};

export default AccountSelectionForm;
