import TextField from "../../Textfield/Textfield";
import HorizontalDivider from "../../HorizontalDivider/HorizontalDivider";
import OptionalTextField from "../../OptionalTextfield/OptionalTextfield";
import { styled } from '@mui/material/styles';

const StyledDiv = styled('div')(({ theme }) => ({
	[theme.breakpoints.down('sm')]: {
		width: '60%',
	},
}));

const ContactSection = () => {
	return (
		<StyledDiv>
			<h5>Contact Information</h5>
			<HorizontalDivider />

			<TextField label='Email' name='email' />
			<TextField label='Personal Phone' name='personalPhone'/> <br />
			<OptionalTextField label='Work Phone (Optional)' name='workPhone'/>
			<TextField label='Ext' name='phoneExtension'/>
		</StyledDiv>
	);
};

export default ContactSection;
