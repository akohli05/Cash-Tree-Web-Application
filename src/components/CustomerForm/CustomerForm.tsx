import BasicButton from '../Button/Button';
import PrimaryOwnerSection from './customer_form_sections/PrimaryOwnerSection';
import CitizenshipSection from './customer_form_sections/CitizenshipSection';
import ContactSection from './customer_form_sections/ContactSection';
import HomeAddressSection from './customer_form_sections/HomeAddressSection';
import MailingAddressSection from './customer_form_sections/MailingAddressSection';
import { useNavigate } from 'react-router-dom';
import { FormContainer, useForm } from 'react-hook-form-mui';

const CustomerForm = () => {
	const navigate = useNavigate();

	const navigateToSummary = () => {
		// 👇️ navigate to /summary
		navigate('/summary');
	};

	//Form and context set up
	const formContext = useForm<{
		firstName: string;
		middleInitial?: string;
		lastName: string;
		suffix?: string;
		birthDate: string;
		socialSecurity: number;
		maidenNameOfMother: string;
		occupation: string;
		citizenship: string;
		email: string;
		personalPhone: string;
		workPhone?: string;
		phoneExtension: string;
		address: string;
		addressAdditional: string;
		city: string;
		state: string;
		zipcode: string;
		addressMailing: string;
		addressAdditionalMailing: string;
		cityMailing: string;
		stateMailing: string;
		zipcodeMailing: string;
	}>({
		defaultValues: {
			firstName: '',
		},
	});

	return (
		<FormContainer
			formContext={formContext}
			onSuccess={(data) => console.log(data)}
		>
			<p style={{ margin: '30px 30px 30px 80px' }}>Your Information</p>

			<div
				style={{
					marginLeft: 200,
				}}
			>
				<PrimaryOwnerSection />
				<CitizenshipSection />
				<ContactSection />
				<HomeAddressSection />
				<MailingAddressSection />

				<BasicButton
					textValue='Next'
					onClick={navigateToSummary}
				/>
			</div>
		</FormContainer>
	);
};

export default CustomerForm;
