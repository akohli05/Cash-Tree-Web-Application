import BasicButton from '../Button/Button';
import CustomerInformation from './CustomerInformation';
import CustomerContact from './CustomerContact';
import CustomerHomeAddress from './CustomerHomeAddress';
import CustomerMailingAddress from './CustomerMailingAddress';
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
				<CustomerInformation />
				<CustomerContact />
				<CustomerHomeAddress />
				<CustomerMailingAddress />
			</form>

			<BasicButton
				textValue='Next'
				onClick={navigateToSummary}
			/>
		</>
	);
};

export default CustomerForm;
