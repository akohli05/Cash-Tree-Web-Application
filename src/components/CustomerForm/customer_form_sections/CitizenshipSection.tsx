import SelectField from '../../SelectField/SelectField';
import countries from '../../../data/countries';

const CitizenshipSection = () => {
	const countriesList: string[] = [];
	{
		countries.map((country) => countriesList.push(country.name));
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
