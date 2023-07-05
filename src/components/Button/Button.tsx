import { Button, styled } from '@mui/material';

interface BasicButtonProps {
	text: string;
}

const StyledButton = styled(Button)({
	'marginTop': '10px',
	'display': 'block',
	'@media (max-width: 600px)': {
		width: '70%',
	},
});

const BasicButton: React.FC<BasicButtonProps> = ({ text }) => {
	return (
		<StyledButton
			variant='contained'
			type='submit'
		>
			{text}
		</StyledButton>
	);
};

export default BasicButton;
