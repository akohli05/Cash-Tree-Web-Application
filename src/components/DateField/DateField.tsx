import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import moment from 'moment';
import { InputLabel, Tooltip, Zoom } from '@mui/material';
import { TextFieldElement } from 'react-hook-form-mui';

const BootstrapInput = styled(TextFieldElement)(({ theme }) => ({
	'margin': '25px 0px 0px 0px',
	'label + &': {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(0.5),
	},
	'& .MuiInputBase-input': {
		'borderRadius': 4,
		'position': 'relative',
		'backgroundColor': theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
		'border': '1px solid',
		'borderColor': theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
		'fontSize': 16,
		'width': 'auto',
		'padding': '10px 57px',
		'transition': theme.transitions.create([
			'border-color',
			'background-color',
			'box-shadow',
		]),
		// Use the system font instead of the default Roboto font.
		'fontFamily': [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
		'&:focus': {
			boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
			borderColor: theme.palette.primary.main,
		},
	},
}));

const StyledBox = styled(Box)({
	display: 'inline-block',
	marginRight: '150px',
	marginTop: '10px',
});

interface DateFieldProps {
	label: string;
	name: string;
}

const DateField: React.FC<DateFieldProps> = ({ label, name }) => {
	//Age restriction
	const today = moment().subtract(18, 'years').calendar();
	const ageRestriction = moment(today).format('YYYY-MM-DD');

	return (
		<StyledBox component='form'>
			<FormControl variant='standard'>
				<InputLabel
					shrink
					htmlFor={name}
				>
					{label}
				</InputLabel>
				<Tooltip
					TransitionComponent={Zoom}
					title='Primary Owner must at least 18 years or older.'
				>
					<BootstrapInput
						inputProps={{ max: ageRestriction }}
						id={name}
						aria-label={name}
						type='date'
						name={name}
						role='datefield'
						required
					/>
				</Tooltip>
			</FormControl>
		</StyledBox>
	);
};

export default DateField;
