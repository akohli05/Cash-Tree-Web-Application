import { ToggleButtonGroupElement, useFormError } from 'react-hook-form-mui';
import { ReactNode } from 'react';
import { styled } from '@mui/material/styles';

interface Option {
	id: string;
	label: ReactNode;
}

interface ButtonGroupProps {
	name: string;
	options: Option[];
}

const StyledToggleButtonGroupElement = styled(ToggleButtonGroupElement)(
	({ theme }) => ({
		backgroundColor: 'white',
		flexDirection: 'row',
		flexWrap: 'wrap',

		[theme.breakpoints.down('md')]: {
			margin: 'auto',
			alignItems: 'center',
		},
	})
);
const ButtonGroup: React.FC<ButtonGroupProps> = ({ name, options }) => {
	return (
		<StyledToggleButtonGroupElement
			name={name}
			options={options}
			required
			color='secondary'
		/>
	);
};

export default ButtonGroup;
