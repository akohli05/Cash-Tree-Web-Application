import TextField from '../../Textfield/Textfield';
import SelectField from '../../SelectField/SelectField';
import BasicDateField from '../../BasicDateField/BasicDateField';
import SocialSecurityField from '../../SocialSecurityField/SocialSecurityField';
import HorizontalDivider from '../../HorizontalDivider/HorizontalDivider';
import occupations from '../../../data/occupations';
import { useState } from 'react';
import { SelectChangeEvent } from '@mui/material';

interface PrimaryOwner {
	firstName: string;
	middleInitial?: string;
	lastName: string;
	suffix?: string;
	birthDate: string;
	socialSecurity: number;
	maidenNameOfMother: string;
	occupation: string;
}

const PrimaryOwnerSection = () => {
	// Suffix select field values
	const suffixItems: string[] = ['Jr.', 'Sr.', 'II', 'III', 'IV', 'V'];

	//Occupation select field values
	const occupationsList: string[] = [];
	{
		occupations.map((occupation) => occupationsList.push(occupation));
	}

	//useState for the primary owner section
	const [primaryOwner, setPrimaryOwner] = useState<PrimaryOwner>({
		firstName: '',
		middleInitial: '',
		lastName: '',
		suffix: '',
		birthDate: '',
		socialSecurity: 123456789,
		maidenNameOfMother: '',
		occupation: '',
	});

	const handleChange = (
		event:
			| React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
			| SelectChangeEvent<unknown>
	) => {
		event.preventDefault();
		setPrimaryOwner({
			...primaryOwner,
			[event.target.name]: event.target.value,
		});

		console.log(primaryOwner);
	};

	return (
		<div>
			<p style={{ margin: '0px 0px 0px -120px' }}>Primary Owner</p>
			<HorizontalDivider />
			<TextField
				label='First Name'
				value={primaryOwner.firstName}
				name='firstName'
				handleChange={handleChange}
			/>
			<TextField
				label='Middle Initial (Optional)'
				value={primaryOwner.middleInitial}
				name='middleInitial'
				handleChange={handleChange}
			/>
			<br />
			<TextField
				label='Last Name'
				value={primaryOwner.lastName}
				name='lastName'
				handleChange={handleChange}
			/>
			<SelectField
				label='Suffix (Optional)'
				value={suffixItems}
				selectedValue={primaryOwner.suffix}
				handleChange={handleChange}
				name='suffix'
			/>
			<br />
			<BasicDateField
				label='Birth Date'
				value={primaryOwner.birthDate}
				name='birthDate'
			/>
			<br />
			<SocialSecurityField
				label='Social Security'
				value={primaryOwner.socialSecurity}
				name='socialSecurity'
				handleChange={handleChange}
			/>
			<br />
			<TextField
				label="Mother's Maiden Name"
				value={primaryOwner.maidenNameOfMother}
				name='maidenNameOfMother'
				handleChange={handleChange}
			/>
			<br />
			<SelectField
				label='Occupation'
				value={occupationsList}
				selectedValue={primaryOwner.occupation}
				handleChange={handleChange}
				name='occupation'
			/>
		</div>
	);
};

export default PrimaryOwnerSection;
