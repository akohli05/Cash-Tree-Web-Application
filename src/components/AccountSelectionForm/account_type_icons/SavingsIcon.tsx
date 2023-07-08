import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import styled from '@emotion/styled';
import StyledCircle from './StyledCircle';

const StyledSavingsIcon = styled(SavingsOutlinedIcon)({
	outlineWidth: 1,
	backgroundColor: '#978dfc',
	fontSize: 48,
});

const SavingsIcon = () => {
	return (
		<StyledCircle backgroundColor='#978dfc'>
			<StyledSavingsIcon />
		</StyledCircle>
	);
};

export default SavingsIcon;
