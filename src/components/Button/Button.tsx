import { Button, styled } from '@mui/material';

interface BasicButtonProps {
	text: string;
	onClick?: () => void
}

const StyledButton = styled(Button)(({ theme }) => ({
	marginTop: '10px',
	marginRight: 10,
	display: 'inline-block',

	[theme.breakpoints.down('sm')]: {
		display: 'block',
		width: '30%',
	},
}));

const BasicButton: React.FC<BasicButtonProps> = ({ text, onClick }) => {
	return (
		<StyledButton
			variant='contained'
			type='submit'
			name={text}
			onClick={onClick}
		>
			{text}
		</StyledButton>
	);
};

export default BasicButton;
