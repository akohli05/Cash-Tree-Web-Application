import { useNavigate } from 'react-router-dom';
import { FormContainer, useForm } from 'react-hook-form-mui';
import styled from '@emotion/styled';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import { Box } from '@mui/material';
import BasicButton from '../Button/Button';
import BasicCard from '../BasicCard/BasicCard';
import { AccountType, Application, ApplicationContextModel } from '../../context/ApplicationContext';
import { useContext } from 'react';

const StyledBox = styled(Box)({
	'display': 'flex',
	'justifyContent': 'center',
	'@media (max-width: 600px)': {
		flexDirection: 'column',
		marginLeft: 100,
		width: 300,
	},
});

const AccountSelectionForm = () => {
	const navigate = useNavigate();

	//Form and context set up
	const accountFormContext = useForm<AccountType[]>({});

	const { handleSubmit } = accountFormContext;

	const onSubmit = (data: AccountType[]) => {
		//bulding the application type
		const application: Partial<Application> = {
			accountType: data,
		};

		const applicationContextModel: ApplicationContextModel = {
			state: application,
			
		}

		//import useContext save the new object here
		const applicationContext = useContext(ApplicationContextModel);

		//navigate to /customer-form
		navigate('/customer-form');
	};

	return (
		<StyledBox>
			<FormContainer
				formContext={accountFormContext}
				handleSubmit={handleSubmit((data) => onSubmit(data))}
			>
				<h4>Select an Account</h4>
				<ButtonGroup
					name='accountType'
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
