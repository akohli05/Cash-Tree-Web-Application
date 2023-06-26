import PrimaryOwnerSection from '../secondary/customer_form_sections/PrimaryOwnerSection';
import HorizontalDivider from '../secondary/HorizontalDivider';

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
