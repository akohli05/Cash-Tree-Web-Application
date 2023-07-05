import TextField from "../../Textfield/Textfield";
import HorizontalDivider from "../../HorizontalDivider/HorizontalDivider";

const ContactSection = () => {
	return (
		<div>
			<h5>Contact Information</h5>
			<HorizontalDivider />

			<TextField label='Email' name='email' />
			<TextField label='Personal Phone' name='personalPhone'/> <br />
			<TextField label='Work Phone (Optional)' name='workPhone'/>
			<TextField label='Ext' name='phoneExtension'/>
		</div>
	);
};

export default ContactSection;
