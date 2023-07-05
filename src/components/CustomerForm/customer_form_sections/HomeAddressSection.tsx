import TextField from '../../Textfield/Textfield';
import SelectField from '../../SelectField/SelectField';
import states from '../../../data/states';
import HorizontalDivider from '../../HorizontalDivider/HorizontalDivider';

const HomeAddressSection = () => {
	
	return (
		<div>
			<h5>Home Address</h5>
			<HorizontalDivider />

			<TextField label='Address' name='address'/>
			<br />
			<TextField label='Address Line 2 (Optional)' name='addressAdditional' />
			<br />
			<TextField label='City' name='city'/>
			<br />
			<SelectField
				label='State'
				items={states}
				name='state'
			/>
			<br />
			<TextField label='Zipcode' name='zipcode'/>
		</div>
	);
};

export default HomeAddressSection;
