import TextField from '../../Textfield/Textfield';
import SelectField from '../../SelectField/SelectField';
import states from '../../../data/states';
import HorizontalDivider from '../../HorizontalDivider/HorizontalDivider';

const HomeAddressSection = () => {
	const statesList: string[] = [];
	{
		states.map((state) => statesList.push(state.abbreviation));
	}
	return (
		<div>
			<p style={{ margin: '20px 0px 0px -120px' }}>Home Address</p>
			<HorizontalDivider />

			<TextField label='Address' name='address'/>
			<br />
			<TextField label='Address Line 2 (Optional)' name='addressAdditional' />
			<br />
			<TextField label='City' name='city'/>
			<br />
			<SelectField
				label='State'
				items={statesList}
				name='state'
			/>
			<br />
			<TextField label='Zipcode' name='zipcode'/>
		</div>
	);
};

export default HomeAddressSection;
