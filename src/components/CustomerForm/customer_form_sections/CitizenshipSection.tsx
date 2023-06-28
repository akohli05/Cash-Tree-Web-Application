import SelectField from '../../SelectField/SelectField';
import countries from '../../../data/countries';
import HorizontalDivider from '../../HorizontalDivider/HorizontalDivider';

const CitizenshipSection = () => {
	const countriesList: string[] = [];
	{
		countries.map((country) => countriesList.push(country.name));
	}

	return (
		<div>
			<p style={{ margin: '20px 0px 0px -120px' }}>Citizenship Status</p>
			<HorizontalDivider />
			
			<SelectField
				label='Country of Citizenship'
				value={countriesList}
			/>
		</div>
	);
};

export default CitizenshipSection;
