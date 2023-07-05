import styled from '@emotion/styled';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import StyledCircle from './StyledCircle';

const StyledSpendingIcon = styled(PaymentOutlinedIcon)({
	'outlineWidth': 1,
	'backgroundColor': '#5db3de',
	'fontSize': 48,
	'@media (max-width: 600px)': {
		fontSize: 20,
	},
});

const SpendingIcon = () => {
	return (
		<StyledCircle backgroundColor='#5db3de'>
			<StyledSpendingIcon />
		</StyledCircle>
	);
};

export default SpendingIcon;
