import { FormContainer, useForm } from 'react-hook-form-mui';
import { styled } from '@mui/material/styles';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import { Box } from '@mui/material';
import BasicButton from '../Button/Button';
import BasicCard from '../BasicCard/BasicCard';
import {
	AccountType,
} from '../../context/ApplicationContext';

const StyledBox = styled(Box)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',

	[theme.breakpoints.down('md')]: {
		margin: 'auto',
		padding: 30,
	},
}));

interface AccountSelectionFormProps {
	onSave: (accountTypes: AccountType[]) => void;
}

const AccountSelectionForm:React.FC<AccountSelectionFormProps> = ({ onSave }) => {
	//Form and context set up
	const accountFormContext = useForm<AccountType[]>({
		/**defaultValues: {
			accountTypes: applicationContext.state?.accountTypes,
		},*/
	});

	const { handleSubmit } = accountFormContext;

	return (
		<StyledBox>
			<FormContainer
				formContext={accountFormContext}
				handleSubmit={handleSubmit((data) => onSave(data))}
				onError={(error) => console.log(error)}
			>
				<h4>Select an Account</h4>
				<ButtonGroup
					name='accountTypes'
					options={[
						{
							id: 'Savings',
							label: <BasicCard accountType={'Savings'} />,
						},
						{
							id: 'Money Market',
							label: <BasicCard accountType={'Money Market'} />,
						},
						{
							id: 'Certificate of Deposit',
							label: <BasicCard accountType={'Certificate of Deposit'} />,
						},
						{
							id: 'Spending',
							label: <BasicCard accountType={'Spending'} />,
						},
					]}
				/>
				<br />
				<BasicButton text='Next' />
			</FormContainer>
		</StyledBox>
	);
};

export default AccountSelectionForm;
