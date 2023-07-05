import BasicButton from '../Button/Button';
import PrimaryOwnerSection from './customer_form_sections/PrimaryOwnerSection';
import CitizenshipSection from './customer_form_sections/CitizenshipSection';
import ContactSection from './customer_form_sections/ContactSection';
import HomeAddressSection from './customer_form_sections/HomeAddressSection';
import MailingAddressSection from './customer_form_sections/MailingAddressSection';
import { useNavigate } from 'react-router-dom';
import { FormContainer, useForm } from 'react-hook-form-mui';
import styled from '@emotion/styled';
import ApplicationContext, {
	Application,
	Customer,
} from '../../context/ApplicationContext';
import { useContext } from 'react';
import Box from '@mui/material/Box';

const StyledBox = styled(Box)({
	'display': 'flex',
	'justifyContent': 'center',
	'@media (max-width: 600px)': {
		flexDirection: 'column',
		marginLeft: 100,
		width: 300,
	},
});

const CustomerForm = () => {
	const navigate = useNavigate();
	const application = useContext(ApplicationContext);

	//Form and context set up
	const formContext = useForm<Customer>({});

	const { handleSubmit } = formContext;

	const onSubmit = (data: Customer) => {
		//bulding the application type
		const application: Partial<Application> = {
			customer: data,
		};
		//import useContext save the new object here

		//navigate to /summary
		navigate('/summary');
	};

	return (
		<StyledBox>
			<FormContainer
				formContext={formContext}
				handleSubmit={handleSubmit((data) => onSubmit(data))}
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
