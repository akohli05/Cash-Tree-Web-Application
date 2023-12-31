import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { TextFieldElement } from 'react-hook-form-mui';
import { InputBaseComponentProps } from '@mui/material/InputBase';

const BootstrapInput = styled(TextFieldElement)(({ theme }) => ({
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

const StyledBox = styled(Box)({
	display: 'inline-block',
	marginRight: '150px',
	marginTop: '10px',
});

interface TextFieldProps {
	label: string;
	name: string;
	required?: boolean;
	placeholder?: string;
	inputProps?: InputBaseComponentProps;
}
const TextField: React.FC<TextFieldProps> = ({
	label,
	name,
	required = true,
	placeholder,
	inputProps,
}) => {
	return (
		<StyledBox>
			<FormControl variant='standard'>
				<InputLabel
					shrink
					htmlFor={name}
				>
					{label}
				</InputLabel>
				<BootstrapInput
					id={name}
					name={name}
					aria-label={name}
					required={required}
					inputProps={inputProps}
					role='textfield'
					placeholder={placeholder}
				/>
			</FormControl>
		</StyledBox>
	);
};

export default TextField;
