import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import styled from '@emotion/styled';
import { IconButton } from '@mui/material';

//Circle Div Outline
const StyledCircle = styled(IconButton)({
	'padding': 4,
	'borderRadius': '50%',
	'borderStyle': 'solid',
	'borderWidth': '2px',
	'borderColor': '#978dfc',
	'backgroundColor': '#978dfc',
	'height': 68,
	'width': 68,
	'&:hover': {
		background: '#978dfc',
	},
});

const StyledSavingsIcon = styled(SavingsOutlinedIcon)({
	outlineWidth: 1,
	backgroundColor: '#978dfc',
	fontSize: 48,
});

const SavingsIcon = () => {
	return (
		<StyledCircle>
			<StyledSavingsIcon />
		</StyledCircle>
	);
};

export default SavingsIcon;
