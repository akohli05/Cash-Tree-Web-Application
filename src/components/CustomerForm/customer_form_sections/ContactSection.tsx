import TextField from "../../Textfield/Textfield";
import HorizontalDivider from "../../HorizontalDivider/HorizontalDivider";
const ContactSection = () => {
	return (
		<div>
			<p style={{ margin: '20px 0px 0px -120px' }}>Contact Information</p>
			<HorizontalDivider />

			<TextField label='Email' name='email' />
			<TextField label='Personal Phone' name='personalPhone'/> <br />
			<TextField label='Work Phone (Optional)' name='workPhone'/>
			<TextField label='Ext' name='phoneExtension'/>
		</div>
	);
};

export default ContactSection;
