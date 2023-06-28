import BasicButton from '../Button/Button';
import PrimaryOwnerSection from './customer_form_sections/PrimaryOwnerSection';
import CitizenshipSection from './customer_form_sections/CitizenshipSection';
import ContactSection from './customer_form_sections/ContactSection';
import HomeAddressSection from './customer_form_sections/HomeAddressSection';
import MailingAddressSection from './customer_form_sections/MailingAddressSection';
import { useNavigate } from 'react-router-dom';

const CustomerForm = () => {
	const navigate = useNavigate();

	const navigateToSummary = () => {
		// 👇️ navigate to /summary
		navigate('/summary');
	};

	return (
		<>
			<p style={{ margin: '30px 30px 30px 80px' }}>Your Information</p>
			<form
				style={{
					marginLeft: 200,
				}}
			>
				<PrimaryOwnerSection />
				<CitizenshipSection />
				<ContactSection />
				<HomeAddressSection />
				<MailingAddressSection />
			</form>

			<BasicButton
				textValue='Next'
				onClick={navigateToSummary}
			/>
		</>
	);
};

export default CustomerForm;
