import HorizontalDivider from '../HorizontalDivider/HorizontalDivider';
import HomeAddressSection from './customer_form_sections/HomeAddressSection';

const CustomerHomeAddress = () => {
	return (
		<>
			<p style={{ margin: '20px 0px 0px -120px' }}>Home Address</p>
			<HorizontalDivider />
			<HomeAddressSection />
		</>
	);
};

export default CustomerHomeAddress;
