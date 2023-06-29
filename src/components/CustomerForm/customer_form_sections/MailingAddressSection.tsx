import TextField from '../../Textfield/Textfield';
import SelectField from '../../SelectField/SelectField';
import states from '../../../data/states';
import HorizontalDivider from '../../HorizontalDivider/HorizontalDivider';
import { useState } from 'react';
import FormLabel from '@mui/material/FormLabel';
import { Radio } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import { ChangeEvent } from 'react';
import { SelectChangeEvent } from '@mui/material';

interface MailingAddress {
	address: string;
	addressAdditional?: string;
	city: string;
	state: string;
	zipCode: string;
}

const MailingAddressSection = () => {
	const [selectedValue, setRadioValue] = useState('Yes');

	const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRadioValue((event.target as HTMLInputElement).value);
	};

	const statesList: string[] = [];
	{
		states.map((state) => statesList.push(state.abbreviation));
	}

	//useState for the mailing address section
	const [mailingAddress, setMailingAddress] = useState<MailingAddress>({
		address: '',
		addressAdditional: '',
		city: '',
		state: '',
		zipCode: '',
	});

	const handleChange = (
		event:
			| ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
			| SelectChangeEvent<unknown>
	) => {
		event.preventDefault();
		setMailingAddress({
			...mailingAddress,
			[event.target.name]: event.target.value,
		});

		console.log(mailingAddress);
	};

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
						value={mailingAddress.address}
						name='address'
						handleChange={handleChange}
					/>
					<br />
					<TextField
						label='Address Line 2 (Optional)'
						value={mailingAddress.addressAdditional}
						name='addressAdditional'
						handleChange={handleChange}
					/>
					<br />
					<TextField
						label='City'
						value={mailingAddress.city}
						name='city'
						handleChange={handleChange}
					/>
					<br />
					<SelectField
						label='State'
						value={statesList}
						selectedValue={mailingAddress.state}
						name='state'
						handleChange={handleChange}
					/>
					<br />
					<TextField
						label='Zipcode'
						value={mailingAddress.zipCode}
						name='zipCode'
						handleChange={handleChange}
					/>
				</>
			)}
		</div>
	);
};

export default MailingAddressSection;
