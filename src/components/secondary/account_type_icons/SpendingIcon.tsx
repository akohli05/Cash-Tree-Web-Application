import styled from '@emotion/styled';
import { IconButton } from '@mui/material';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';

//Circle Div Outline
const StyledCircle = styled(IconButton)({
	'padding': 4,
	'borderRadius': '50%',
	'borderStyle': 'solid',
	'borderWidth': '2px',
	'borderColor': '#5db3de',
	'backgroundColor': '#5db3de',
	'height': 68,
	'width': 68,
	'&:hover': {
		background: '#5db3de',
	},
});

const StyledSpendingIcon = styled(PaymentOutlinedIcon)({
	outlineWidth: 1,
	backgroundColor: '#5db3de',
	fontSize: 48,
});

const SpendingIcon = () => {
	return (
		<StyledCircle>
			<StyledSpendingIcon />
		</StyledCircle>
	);
};

export default SpendingIcon;
