import TextField from '../../Textfield/Textfield';
import SelectField from '../../SelectField/SelectField';
import states from '../../../data/states';
import HorizontalDivider from '../../HorizontalDivider/HorizontalDivider';
import { useState } from 'react';
import FormLabel from '@mui/material/FormLabel';
import { Radio } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';

const MailingAddressSection = () => {
	const [selectedValue, setRadioValue] = useState('Yes');

	const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRadioValue((event.target as HTMLInputElement).value);
	};

	const statesList: string[] = [];
	{
		states.map((state) => statesList.push(state.abbreviation));
	}

	return (
		<div>
			<p style={{ margin: '20px 0px 0px -120px' }}>Mailing Address</p>
			<HorizontalDivider />

			<FormLabel id='demo-row-radio-buttons-group-label'>
				Is your mailing address the same as your home address?
			</FormLabel>

			<RadioGroup
				row
				aria-labelledby='demo-row-radio-buttons-group-label'
				name='row-radio-buttons-group'
				value={selectedValue}
				onChange={handleRadioChange}
				style={{ display: 'inline-block' }}
			>
				<FormControlLabel
					value='Yes'
					control={<Radio size='small' />}
					label='Yes'
					checked={selectedValue === 'Yes'}
				/>
				<FormControlLabel
					value='No'
					control={<Radio size='small' />}
					label='No'
				/>
			</RadioGroup>
			{selectedValue === 'Yes' ? (
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
						items={statesList}
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
