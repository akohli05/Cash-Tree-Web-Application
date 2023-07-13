import TextField from '../../Textfield/Textfield';
import SelectField from '../../SelectField/SelectField';
import HorizontalDivider from '../../HorizontalDivider/HorizontalDivider';
import occupations from '../../../data/occupations';
import { styled } from '@mui/material/styles';
import DateField from '../../DateField/DateField';

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
			<TextField
				label='Middle Initial (Optional)'
				name='middleInitial'
				required={false}
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
				required={false}
			/>
			<br />
			<DateField
				label='Birth Date'
				name='birthDate'
			/>
			<br />
			<TextField
				label='Social Security'
				name='socialSecurity'
				placeholder='***-**-****'
				inputProps={{ maxLength: 9 }}
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
