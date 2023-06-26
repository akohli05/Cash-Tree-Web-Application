import styled from '@emotion/styled';
import { IconButton } from '@mui/material';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';

//Circle Div Outline
const StyledCircle = styled(IconButton)({
	'padding': 4,
	'borderRadius': '50%',
	'borderStyle': 'solid',
	'borderWidth': '2px',
	'borderColor': '#6fa125',
	'backgroundColor': '#6fa125',
	'height': 68,
	'width': 68,
	'&:hover': {
		background: '#6fa125',
	},
});

const StyleMoneyMarketIcon = styled(LocalAtmOutlinedIcon)({
	outlineWidth: 1,
	backgroundColor: '#6fa125',
	fontSize: 48,
});

const MoneyMarketIcon = () => {
	return (
		<StyledCircle>
			<StyleMoneyMarketIcon />
		</StyledCircle>
	);
};

export default MoneyMarketIcon;
