import HorizontalDivider from '../HorizontalDivider/HorizontalDivider';
import MailingAddressSection from './customer_form_sections/MailingAddressSection';
import { useState } from 'react';
import FormLabel from '@mui/material/FormLabel';
import { Radio } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';

const CustomerMailingAddress = () => {
	const [selectedValue, setRadioValue] = useState('Yes');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRadioValue((event.target as HTMLInputElement).value);
	};

	return (
		<>
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
				onChange={handleChange}
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
			{selectedValue === 'Yes' ? '' : <MailingAddressSection />}
		</>
	);
};

export default CustomerMailingAddress;
