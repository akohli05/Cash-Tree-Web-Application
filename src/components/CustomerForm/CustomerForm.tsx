import BasicButton from '../Button/Button';
import PrimaryOwnerSection from './customer_form_sections/PrimaryOwnerSection';
import CitizenshipSection from './customer_form_sections/CitizenshipSection';
import ContactSection from './customer_form_sections/ContactSection';
import HomeAddressSection from './customer_form_sections/HomeAddressSection';
import MailingAddressSection from './customer_form_sections/MailingAddressSection';
import { useNavigate } from 'react-router-dom';
import { FormContainer, useForm } from 'react-hook-form-mui';
import { styled } from '@mui/material/styles';
import { ApplicationContext, Customer } from '../../context/ApplicationContext';
import { useContext } from 'react';
import Box from '@mui/material/Box';
import moment from 'moment';

const StyledBox = styled(Box)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',

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

const CustomerForm = () => {
	const navigate = useNavigate();
	const applicationContext = useContext(ApplicationContext);

	//Form and context set up
	const formContext = useForm<Customer>({
		defaultValues: {
			firstName: applicationContext.state.customer?.firstName,
			middleInitial: applicationContext.state.customer?.middleInitial,
			lastName: applicationContext.state.customer?.lastName,
			suffix: applicationContext.state.customer?.suffix,
			birthDate: applicationContext.state.customer?.birthDate,
			socialSecurity: applicationContext.state.customer?.socialSecurity,
			maidenNameOfMother: applicationContext.state.customer?.maidenNameOfMother,
			occupation: applicationContext.state.customer?.occupation,
			citizenship: applicationContext.state.customer?.citizenship,
			email: applicationContext.state.customer?.email,
			personalPhone: applicationContext.state.customer?.personalPhone,
			workPhone: applicationContext.state.customer?.workPhone,
			phoneExtension: applicationContext.state.customer?.phoneExtension,
			address: applicationContext.state.customer?.address,
			addressAdditional: applicationContext.state.customer?.addressAdditional,
			city: applicationContext.state.customer?.city,
			state: applicationContext.state.customer?.state,
			zipcode: applicationContext.state.customer?.zipcode,
			mailingRadioButtonGroup:
				applicationContext.state.customer?.mailingRadioButtonGroup,
			addressMailing: applicationContext.state.customer?.addressMailing,
			addressAdditionalMailing:
				applicationContext.state.customer?.addressAdditionalMailing,
			cityMailing: applicationContext.state.customer?.cityMailing,
			stateMailing: applicationContext.state.customer?.stateMailing,
			zipcodeMailing: applicationContext.state.customer?.zipcodeMailing,
		},
	});

	const { handleSubmit } = formContext;

	const onSubmit = (customer: Customer) => {
		applicationContext.updateCustomer(customer);

		//navigate to /summary
		navigate('/summary');
	};

	return (
		<StyledBox>
			<FormContainer
				formContext={formContext}
				handleSubmit={handleSubmit((data) => onSubmit(data))}
				onError={(error) => console.log(error)}
			>
				<h4>Your Information</h4>

				<PrimaryOwnerSection />
				<CitizenshipSection />
				<ContactSection />
				<HomeAddressSection />
				<MailingAddressSection />

				<BasicButton text='Next' />
			</FormContainer>
		</StyledBox>
	);
};

export default CustomerForm;
