import styled from '@emotion/styled';
import { IconButton } from '@mui/material';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import StyledCircle from './StyledCircle';

const StyleMoneyMarketIcon = styled(LocalAtmOutlinedIcon)({
	'outlineWidth': 1,
	'backgroundColor': '#6fa125',
	'fontSize': 48,
	'@media (max-width: 600px)': {
		fontSize: 20,
	},
});

const MoneyMarketIcon = () => {
	return (
		<StyledCircle backgroundColor='#6fa125'>
			<StyleMoneyMarketIcon />
		</StyledCircle>
	);
};

export default MoneyMarketIcon;
