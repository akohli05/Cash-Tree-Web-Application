import TextField from '../../Textfield/Textfield';
import SelectField from '../../SelectField/SelectField';
import states from '../../../data/states';

const HomeAddressSection = () => {
	const statesList: string[] = [];
	{
		states.map((state) => statesList.push(state.abbreviation));
	}
	return (
		<div>
			<TextField label='Address' />
			<br />
			<TextField label='Address Line 2 (Optional)' />
			<br />
			<TextField label='City' />
			<br />
			<SelectField
				label='State'
				value={statesList}
			/>
			<br />
			<TextField label='Zipcode' />
		</div>
	);
};

export default HomeAddressSection;
