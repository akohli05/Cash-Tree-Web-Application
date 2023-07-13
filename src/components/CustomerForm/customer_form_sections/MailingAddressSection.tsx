import TextField from '../../Textfield/Textfield';
import SelectField from '../../SelectField/SelectField';
import states from '../../../data/states';
import HorizontalDivider from '../../HorizontalDivider/HorizontalDivider';
import { RadioButtonGroup } from 'react-hook-form-mui';
import { useState } from 'react';
import { styled } from '@mui/material/styles';

const StyledDiv = styled('div')(({ theme }) => ({
	[theme.breakpoints.down('md')]: {
		width: '80%',
	},
	[theme.breakpoints.down('sm')]: {
		width: '60%',
	},
}));

const MailingAddressSection = () => {
	const [selectedRadio, setSelectedRadio] = useState('Yes');

	const handleChange = (value: string) => {
		setSelectedRadio(value);
	};

	return (
		<StyledDiv>
			<h5>Mailing Address</h5>
			<HorizontalDivider />

			<RadioButtonGroup
				row
				name='isHomeandMailingSame'
				aria-label='isHomeandMailingSame'
				label='Is your mailing address the same as your home address?'
				options={[
					{
						id: 'Yes',
						label: 'Yes',
					},
					{
						id: 'No',
						label: 'No',
					},
				]}
				onChange={(data) => handleChange(data)}
				required
			></RadioButtonGroup>
			{selectedRadio === 'Yes' ? (
				''
			) : (
				<>
					<br />
					<TextField
						label='Mailing Address'
						name='addressMailing'
					/>
					<br />
					<TextField
						label='Address Line 2 (Optional)'
						name='addressAdditionalMailing'
						required={false}
					/>
					<br />
					<TextField
						label='City'
						name='cityMailing'
					/>
					<br />
					<SelectField
						label='State'
						items={states}
						name='stateMailing'
					/>
					<br />
					<TextField
						label='Zipcode'
						name='zipcodeMailing'
					/>
				</>
			)}
		</StyledDiv>
	);
};

export default MailingAddressSection;
