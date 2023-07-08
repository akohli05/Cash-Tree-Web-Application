import TextField from '../../Textfield/Textfield';
import SelectField from '../../SelectField/SelectField';
import states from '../../../data/states';
import HorizontalDivider from '../../HorizontalDivider/HorizontalDivider';
import OptionalTextField from '../../OptionalTextfield/OptionalTextfield';
import { styled } from '@mui/material/styles';

const StyledDiv = styled('div')(({ theme }) => ({
	[theme.breakpoints.down('sm')]: {
		width: '60%',
	},
}));

const HomeAddressSection = () => {
	return (
		<StyledDiv>
			<h5>Home Address</h5>
			<HorizontalDivider />

			<TextField
				label='Address'
				name='address'
			/>
			<br />
			<OptionalTextField
				label='Address Line 2 (Optional)'
				name='addressAdditional'
			/>
			<br />
			<TextField
				label='City'
				name='city'
			/>
			<br />
			<SelectField
				label='State'
				items={states}
				name='state'
			/>
			<br />
			<TextField
				label='Zipcode'
				name='zipcode'
			/>
		</StyledDiv>
	);
};

export default HomeAddressSection;
