import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { ApplicationContext } from '../../context/ApplicationContext';
import { useContext } from 'react';
import { Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BasicButton from '../Button/Button';

const StyledBox = styled(Box)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	paddingLeft: 100,
	paddingRight: 100,

	[theme.breakpoints.down('md')]: {
		marginLeft: 'auto',
		padding: 20,
	},

	[theme.breakpoints.down('sm')]: {
		padding: 10,
	},
}));

const Section = styled(Box)({
	textAlign: 'center',
	backgroundColor: '#f7f6f2',
	boxShadow: '0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)',
});

const Wrapper = styled(Box)({
	display: 'grid',
	gridTemplateColumns: 'repeat(1, 1fr)',
	gridGap: 8,
	marginTop: 16,
});

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
				<Wrapper>
					<Section>
						<h5>Account Types(s)</h5>
						<p>{accountTypes}</p>
					</Section>
					<Section>
						<h5>Primary Owner</h5>
						<p>First Name: {firstName}</p>
						<p>Middle Initial (Optional): {middleInitial}</p>
						<p>Last Name: {lastName}</p>
						<p>Suffix (Optional): {suffix}</p>
						<p>Birth Date: {birthDate}</p>
						<p>Social Security: {socialSecurity}</p>
						<p>Mother's Maiden Name: {maidenNameOfMother}</p>
						<p>Occupation: {occupation}</p>
					</Section>
					<Section>
						<h5>Citizenship</h5>
						<p>Citizenship: {citizenship}</p>

						<h5>Contact</h5>
						<p>Email: {email}</p>
						<p>Personal Phone: {personalPhone}</p>
						<p>Work Phone (Optional): {workPhone}</p>
						<p>Phone Extension: {phoneExtension}</p>
					</Section>
					<Section>
						<h5>Home Address</h5>
						<p>Address: {address}</p>
						<p>Additional Address: {addressAdditional}</p>
						<p>City: {city}</p>
						<p>State: {state}</p>
						<p>Zip Code: {zipcode}</p>
					</Section>
					<Section>
						<h5>Mailing Address</h5>
						{mailingRadioButtonGroup[0] === 'No' ? (
							<>
								<p>Address: {addressMailing}</p>
								<p>Additional Address: {addressAdditionalMailing}</p>
								<p>City: {cityMailing}</p>
								<p>State: {stateMailing}</p>
								<p>Zip Code: {zipcodeMailing}</p>
							</>
						) : (
							'Mailing address is the same as the home address.'
						)}
					</Section>
				</Wrapper>
				<BasicButton
					text='Back'
					onClick={() => navigate('/customer-form')}
				/>

				<BasicButton
					text='Next'
					onClick={() => navigate('/confirmation')}
				/>
			</Container>
		</StyledBox>
	);
};

export default Summary;
