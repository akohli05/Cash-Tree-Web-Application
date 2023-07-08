import TextField from '../../Textfield/Textfield';
import SelectField from '../../SelectField/SelectField';
import DateTextField from '../../DateTextField/DateTextField';
import SocialSecurityField from '../../SocialSecurityField/SocialSecurityField';
import HorizontalDivider from '../../HorizontalDivider/HorizontalDivider';
import occupations from '../../../data/occupations';
import OptionalTextField from '../../OptionalTextfield/OptionalTextfield';
import OptionalSelectField from '../../OptionalSelectField/OptionalSelectField';
import { styled } from '@mui/material/styles';

const StyledDiv = styled('div')(({ theme }) => ({
	[theme.breakpoints.down('sm')]: {
		width: '60%',
	},
}));

const PrimaryOwnerSection = () => {
	// Suffix select field values
	const suffixItems = [
		{
			id: 'Jr.',
			label: 'Jr.',
		},
		{
			id: 'Sr.',
			label: 'Sr.',
		},
		{
			id: 'II',
			label: 'II',
		},
		{
			id: 'III',
			label: 'III',
		},
		{
			id: 'IV',
			label: 'IV',
		},
		{
			id: 'V',
			label: 'V',
		},
	];

	//Occupation select field values
	let occupationsList: { id: string; label: string }[] = [];
	{
		//occupations.map((occupation) => occupationsList.push(occupation));
		occupationsList = occupations.map((str) => ({
			label: str,
			id: str,
		}));
	}

	return (
		<StyledDiv>
			<h5>Primary Owner</h5>
			<HorizontalDivider />
			<TextField
				label='First Name'
				name='firstName'
			/>
			<OptionalTextField
				label='Middle Initial (Optional)'
				name='middleInitial'
			/>
			<br />
			<TextField
				label='Last Name'
				name='lastName'
			/>
			<OptionalSelectField
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
		</StyledDiv>
	);
};

export default PrimaryOwnerSection;
