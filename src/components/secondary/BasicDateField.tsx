import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import { alpha, styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';

const StyledDateField = styled(DateField)(({ theme }) => ({
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
		'padding': '10px 12px',
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

const BasicDateField = (props: { label: string }) => {
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
			<FormControl variant='standard'>
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<DemoContainer components={['DateField']}>
						<InputLabel
							shrink
							htmlFor='datefield'
						>
							{props.label}
						</InputLabel>
						<StyledDateField
							id='datefield'
							style={{ marginTop: '10px', marginLeft: '0px' }}
						/>
					</DemoContainer>
				</LocalizationProvider>
			</FormControl>
		</Box>
	);
};

export default BasicDateField;
