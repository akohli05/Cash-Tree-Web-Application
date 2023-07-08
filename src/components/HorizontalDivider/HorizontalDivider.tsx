import { styled } from '@mui/material/styles';

const StyledDivider = styled('hr')(({ theme }) => ({
	'display': 'flex',
	'flexWrap': 'wrap',
	'border-top': '2px solid #bbb',
	'opacity': '15%',

	[theme.breakpoints.down('md')]: {
		display: 'block',
		float: 'left',
		width: '80%',
	},

	[theme.breakpoints.down('sm')]: {
		display: 'block',
		float: 'left',
		width: '50%',
	},
}));

const HorizontalDivider = () => {
	return (
		<>
			<StyledDivider />
		</>
	);
};

export default HorizontalDivider;
