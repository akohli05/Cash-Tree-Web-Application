import { ToggleButtonGroupElement } from 'react-hook-form-mui';
import { ReactNode } from 'react';
import styled from '@emotion/styled';

interface Option {
	id: string;
	label: ReactNode;
}

interface ButtonGroupProps {
	name: string;
	options: Option[];
}

const StyledToggleButtonGroupElement = styled(ToggleButtonGroupElement)({
	'backgroundColor': 'white',
	'@media (max-width: 600px)': {
		display: 'block',
	},
});

const ButtonGroup: React.FC<ButtonGroupProps> = ({ name, options }) => {
	return (
		<StyledToggleButtonGroupElement
			name={name}
			options={options}
		/>
	);
};

export default ButtonGroup;
