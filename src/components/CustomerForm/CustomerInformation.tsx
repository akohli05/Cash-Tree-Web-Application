import PrimaryOwnerSection from './customer_form_sections/PrimaryOwnerSection';
import HorizontalDivider from '../HorizontalDivider/HorizontalDivider';

const CustomerInformation = () => {
	return (
		<>
			<p style={{ margin: '0px 0px 0px -120px' }}>Primary Owner</p>
			<HorizontalDivider />
			<PrimaryOwnerSection />
		</>
	);
};

export default CustomerInformation;
