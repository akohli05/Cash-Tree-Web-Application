import TextField from '../../Textfield/Textfield';
import SelectField from '../../SelectField/SelectField';
import DateTextField from '../../DateTextField/DateTextField';
import SocialSecurityField from '../../SocialSecurityField/SocialSecurityField';
import HorizontalDivider from '../../HorizontalDivider/HorizontalDivider';
import occupations from '../../../data/occupations';

const PrimaryOwnerSection = () => {
	// Suffix select field values
	const suffixItems = [
		{
			id: '1',
			label: 'Jr.',
		},
		{
			id: '2',
			label: 'Sr.',
		},
		{
			id: '3',
			label: 'II',
		},
		{
			id: '4',
			label: 'III',
		},
		{
			id: '5',
			label: 'IV',
		},
		{
			id: '6',
			label: 'V',
		},
	];

	//Occupation select field values
	let occupationsList: { id: string; label: string }[] = [];
	{
		//occupations.map((occupation) => occupationsList.push(occupation));
		occupationsList = occupations.map((str, index) => ({
			label: str,
			id: index + 1 + '1',
		}));
	}

	return (
		<div>
			<p style={{ margin: '0px 0px 0px -120px' }}>Primary Owner</p>
			<HorizontalDivider />
			<TextField
				label='First Name'
				name='firstName'
			/>
			<TextField
				label='Middle Initial (Optional)'
				name='middleInitial'
			/>
			<br />
			<TextField
				label='Last Name'
				name='lastName'
			/>
			<SelectField
				label='Suffix (Optional)'
				items={suffixItems}
				name='suffix'
			/>
			<br />
			<DateTextField
				label='Birth Date'
				name='birthDate'
			/>
			<br />
			<SocialSecurityField
				label='Social Security'
				name='socialSecurity'
			/>
			<br />
			<TextField
				label="Mother's Maiden Name"
				name='maidenNameOfMother'
			/>
			<br />
			<SelectField
				label='Occupation'
				items={occupationsList}
				name='occupation'
			/>
		</div>
	);
};

export default PrimaryOwnerSection;
