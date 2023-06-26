import BasicCard from '../secondary/BasicCard';
import BasicButton from '../secondary/Button';

const AccountSelection = () => {
	return (
		<>
			<p style={{ margin: '30px 30px 30px 80px' }}>Select an Account</p>
			<div
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					marginLeft: 200,
				}}
			>
				<BasicCard accountType={'Savings'} />
				<BasicCard accountType={'Money Market'} />
				<BasicCard accountType={'Certificate of Deposit'} />
				<BasicCard accountType={'Spending'} />
			</div>

			<BasicButton textValue='Next' />
		</>
	);
};

export default AccountSelection;
