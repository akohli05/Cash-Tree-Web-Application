import BasicButton from '../secondary/Button';
import CustomerInformation from './CustomerInformation';
import CustomerContact from './CustomerContact';

const CustomerForm = () => {
	return (
		<>
			<p style={{ margin: '30px 30px 30px 80px' }}>Your Information</p>
			<form
				style={{
					marginLeft: 200,
				}}
			>
				<CustomerInformation />
				<CustomerContact />
			</form>

			<BasicButton textValue='Next' />
		</>
	);
};

export default CustomerForm;
