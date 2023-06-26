import TextField from '../Textfield';
import SelectField from '../SelectField';
import BasicDateField from '../BasicDateField';
import SocialSecurityField from '../SocialSecurityField';

const PrimaryOwnerSection = () => {
	const suffixItems: string[] = ['Jr.', 'Sr.', 'II', 'III', 'IV', 'V'];

	const occupationItems: string[] = [
		'Accountant',
		'Administrative Services',
		'Agriculture',
		'Attorney',
		'Business Owner',
		'Customer Service',
		'Education',
		'Engineer',
		'Financial Services',
		'Government Official',
		'Homemaker',
		'Hospitality',
		'Medical/Health',
		'Military',
		'Public Services',
		'Real Estate',
		'Retired',
		'Sales/Marketing',
		'Student',
		'Technology',
		'Unemployed',
		'Volunteer Worker',
		'Other',
	];

	return (
		<div>
			<TextField label='First Name' />
			<TextField label='Middle Initial (Optional)' /> <br />
			<TextField label='Last Name' />
			<SelectField
				label='Suffix (Optional)'
				value={suffixItems}
			/>
			<br />
			<BasicDateField label='Birth Date' />
			<br />
			<SocialSecurityField label='Social Security' />
			<br />
			<TextField label="Mother's Maiden Name" />
			<br />
			<SelectField
				label='Occupation'
				value={occupationItems}
			/>
		</div>
	);
};

export default PrimaryOwnerSection;
