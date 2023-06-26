import SelectField from '../SelectField';
import * as countries from './countries.json';

const CitizenshipSection = () => {
	const countriesList: string[] = [];
	{
		countries.map((country) => (countriesList.push(country.name)));
	}

	return (
		<div>
			<SelectField
				label='Country of Citizenship'
				value={countriesList}
			/>
		</div>
	);
};

export default CitizenshipSection;
