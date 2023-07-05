import TextField from '../../Textfield/Textfield';
import SelectField from '../../SelectField/SelectField';
import states from '../../../data/states';
import HorizontalDivider from '../../HorizontalDivider/HorizontalDivider';
import { RadioButtonGroup } from 'react-hook-form-mui';
import { useState } from 'react';

const MailingAddressSection = () => {
	const [selectedRadio, setSelectedRadio] = useState('Yes');

	const handleChange = (value:string) => {
		setSelectedRadio(value);
	};


	return (
		<div>
			<h5>Mailing Address</h5>
			<HorizontalDivider />

			<RadioButtonGroup
				row
				label='Is your mailing address the same as your home address?'
				name='mailingRadioButtonGroup'
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
			></RadioButtonGroup>
			{selectedRadio === 'Yes' ? (
				''
			) : (
				<>
					<br />
					<TextField
						label='Address'
						name='addressMailing'
					/>
					<br />
					<TextField
						label='Address Line 2 (Optional)'
						name='addressAdditionalMailing'
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
		</div>
	);
};

export default MailingAddressSection;
