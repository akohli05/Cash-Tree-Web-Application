import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	rowGap: '8',
	alignItems: 'center',

	[theme.breakpoints.down('md')]: {
		margin: 'auto',
		padding: 30,
	},
}));

const ConfirmationScreen = () => {
	return (
		<StyledBox>
			<CheckCircleRoundedIcon style={{fontSize: '10em', color: 'green'}}/>
			<p>
				Form submitted successfully! Thank you for signing up with Cash Tree!
			</p>
		</StyledBox>
	);
};

export default ConfirmationScreen;
