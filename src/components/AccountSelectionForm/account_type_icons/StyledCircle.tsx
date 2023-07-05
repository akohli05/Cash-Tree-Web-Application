import { styled, IconButton } from '@mui/material';

//Circle Div Outline
const StyledIconButton = styled(IconButton)({
	'padding': 4,
	'borderRadius': '50%',
	'borderStyle': 'solid',
	'borderWidth': '2px',
	'borderColor': 'black',
	'backgroundColor': 'white',
	'height': 68,
	'width': 68,
	'&:hover': {
		background: '#5db3de',
	},
	'@media (max-width: 600px)': {
		width: 30,
		height: 30,
	},
});

const StyledCircle = ({
	children,
	backgroundColor,
}: {
	children: React.ReactNode;
	backgroundColor: string;
}) => {
	return (
		<StyledIconButton
			style={{ backgroundColor: backgroundColor, borderColor: backgroundColor }}
		>
			{children}
		</StyledIconButton>
	);
};

export default StyledCircle;
