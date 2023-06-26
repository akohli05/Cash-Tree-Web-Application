import HorizontalDivider from '../secondary/HorizontalDivider';
import CitizenshipSection from '../secondary/customer_form_sections/CitizenshipSection';
import ContactSection from '../secondary/customer_form_sections/ContactSection';

const CustomerContact = () => {
	return (
		<>
			<p style={{ margin: '20px 0px 0px -120px' }}>Citizenship Status</p>
			<HorizontalDivider />
			<CitizenshipSection />

			<p style={{ margin: '20px 0px 0px -120px' }}>Contact Information</p>
			<HorizontalDivider />
			<ContactSection />
		</>
	);
};

export default CustomerContact;
