import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { ApplicationContext } from '../../context/ApplicationContext';
import { useContext } from 'react';
import { Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BasicButton from '../Button/Button';

const Wrapper = styled(Box)({
	display: 'grid',
	gridTemplateColumns: 'repeat(2, 1fr)',
	gridGap: 8,
	marginTop: 16,
});

const StyledBox = styled(Box)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	paddingLeft: 100,
	paddingRight: 100,
	textAlign: 'center',

	[theme.breakpoints.down('md')]: {
		width: '100%',
		marginLeft: 'auto',
		padding: 20,
	},

	[theme.breakpoints.down('sm')]: {
		padding: 10,
		width: '50%',
	},
}));

const Summary = () => {
	const applicationContext = useContext(ApplicationContext);
	const navigate = useNavigate();

	//Current form data
	//Account Type
	const accountTypes = [applicationContext.state.accountTypes];

	//Primary owner
	const firstName = [applicationContext.state.customer.firstName];
	const middleInitial = [applicationContext.state.customer.middleInitial];
	const lastName = [applicationContext.state.customer.lastName];

	const suffix = [applicationContext.state.customer.suffix];
	const birthDate = [applicationContext.state.customer.birthDate];
	const socialSecurity = [applicationContext.state.customer.socialSecurity];
	const maidenNameOfMother = [
		applicationContext.state.customer.maidenNameOfMother,
	];
	const occupation = [applicationContext.state.customer.occupation];

	//Citizenship and Contact
	const citizenship = [applicationContext.state.customer.citizenship];
	const email = [applicationContext.state.customer.email];
	const personalPhone = [applicationContext.state.customer.personalPhone];
	const workPhone = [applicationContext.state.customer.workPhone];
	const phoneExtension = [applicationContext.state.customer.phoneExtension];

	//Home Address
	const address = [applicationContext.state.customer.address];
	const addressAdditional = [
		applicationContext.state.customer.addressAdditional,
	];
	const city = [applicationContext.state.customer.city];
	const state = [applicationContext.state.customer.state];
	const zipcode = [applicationContext.state.customer.zipcode];

	//Mailing Address
	const mailingRadioButtonGroup = [
		applicationContext.state.customer.mailingRadioButtonGroup,
	];

	let addressMailing = [applicationContext.state.customer.addressMailing];
	let addressAdditionalMailing = [
		applicationContext.state.customer.addressAdditionalMailing,
	];
	let cityMailing = [applicationContext.state.customer.cityMailing];
	let stateMailing = [applicationContext.state.customer.stateMailing];
	let zipcodeMailing = [applicationContext.state.customer.zipcodeMailing];

	if (mailingRadioButtonGroup[0] === 'Yes') {
		addressMailing = address;
		addressAdditionalMailing = addressAdditional;
		cityMailing = city;
		stateMailing = state;
	}

	return (
		<StyledBox>
			<Container>
				<Box>
					<h5>Account Types(s)</h5>
					<p>{accountTypes}</p>
				</Box>

				<Wrapper>
					<Box style={{ backgroundColor: 'lightblue' }}>
						<h5>Primary Owner</h5>
						<p>First Name: {firstName}</p>
						<p>Middle Initial (Optional): {middleInitial}</p>
						<p>Last Name: {lastName}</p>
						<p>Suffix (Optional): {suffix}</p>
						<p>Birth Date: {birthDate}</p>
						<p>Social Security: {socialSecurity}</p>
						<p>Mother's Maiden Name: {maidenNameOfMother}</p>
						<p>Occupation: {occupation}</p>
					</Box>
					<Box style={{ backgroundColor: 'lightcoral' }}>
						<h5>Citizenship</h5>
						<p>Citizenship: {citizenship}</p>

						<h5>Contact</h5>
						<p>Email: {email}</p>
						<p>Last Name: {lastName}</p>
						<p>Suffix (Optional): {firstName}</p>
						<p>Birth Date: {birthDate}</p>
						<p>Social Security: {socialSecurity}</p>
						<p>Mother's Maiden Name: {maidenNameOfMother}</p>
						<p>Occupation: {occupation}</p>
					</Box>
					<Box style={{ backgroundColor: 'lightpink' }}> one</Box>
					<Box style={{ backgroundColor: 'lightpurple' }}>two</Box>
				</Wrapper>
			</Container>
			<BasicButton
				text='Back'
				onClick={() => navigate('/customer-form')}
			/>

			<BasicButton
				text='Next'
				onClick={() => navigate('/confirmation')}
			/>
		</StyledBox>
	);
};

export default Summary;
