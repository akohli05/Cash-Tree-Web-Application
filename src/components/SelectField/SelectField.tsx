import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Select } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { alpha, styled } from '@mui/material/styles';

const StyledSelectField = styled(Select)(({ theme }) => ({
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
		'padding': '10px 210px',
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

const SelectField = (props: { label: string; value: string[] }) => {
	return (
		<Box
			component='form'
			noValidate
			sx={{
				display: 'inline-block',
				marginRight: '150px',
				marginTop: '10px',
			}}
		>
			<FormControl style={{ width: '300' }}>
				<InputLabel
					shrink
					htmlFor='selectfield'
					style={{ marginLeft: '0px 0px 0px 0px' }}
				>
					{props.label}
				</InputLabel>
				<StyledSelectField
					id='selectfield'
					style={{ marginLeft: '0px' }}
				>
					{props.value.map((aValue, index) => (
						<MenuItem key={index}>{aValue}</MenuItem>
					))}
					;
				</StyledSelectField>
			</FormControl>
		</Box>
	);
};

export default SelectField;
