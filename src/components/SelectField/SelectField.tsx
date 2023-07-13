import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import { alpha, styled } from '@mui/material/styles';
import { SelectElement } from 'react-hook-form-mui';

const StyledSelectField = styled(SelectElement)(({ theme }) => ({
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
		'width': '200px',
		'padding': '10px 10px',
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

interface SelectFieldProps {
	label: string;
	items: { id: string; label: string }[];
	name: string;
	required?: boolean;
}

const SelectField: React.FC<SelectFieldProps> = ({
	label,
	items,
	name,
	required = true,
}) => {
	return (
		<StyledBox>
			<FormControl>
				<InputLabel
					shrink
					htmlFor='selectfield'
				>
					{label}
				</InputLabel>
				<StyledSelectField
					id='selectfield'
					aria-label={name}
					style={{ marginLeft: '0px 0px -10px 0px' }}
					name={name}
					options={items}
					role='selectfield'
					required={required}
				/>
			</FormControl>
		</StyledBox>
	);
};

export default SelectField;
