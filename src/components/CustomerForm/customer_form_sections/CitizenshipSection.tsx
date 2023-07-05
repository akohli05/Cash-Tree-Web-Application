import SelectField from '../../SelectField/SelectField';
import countries from '../../../data/countries';
import HorizontalDivider from '../../HorizontalDivider/HorizontalDivider';
import { SectionHeading } from './HomeAddressSection';

const CitizenshipSection = () => {
	return (
		<div>
			<h5>Citizenship Status</h5>
			<HorizontalDivider />

			<SelectField
				label='Country of Citizenship'
				name='citizenship'
				items={countries}
			/>
		</div>
	);
};

export default CitizenshipSection;
