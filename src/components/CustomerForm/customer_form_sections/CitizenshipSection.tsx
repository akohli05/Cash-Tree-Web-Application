import SelectField from '../../SelectField/SelectField';
import countries from '../../../data/countries';
import HorizontalDivider from '../../HorizontalDivider/HorizontalDivider';
import { styled } from '@mui/material/styles';

const StyledDiv = styled('div')(({ theme }) => ({
	[theme.breakpoints.down('sm')]: {
		width: '60%',
	},
}));

const CitizenshipSection = () => {
	return (
		<StyledDiv>
			<h5>Citizenship Status</h5>
			<HorizontalDivider />

			<SelectField
				label='Country of Citizenship'
				name='citizenship'
				items={countries}
			/>
		</StyledDiv>
	);
};

export default CitizenshipSection;
