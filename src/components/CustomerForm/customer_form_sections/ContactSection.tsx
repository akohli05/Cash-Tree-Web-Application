import TextField from "../../Textfield/Textfield";
import HorizontalDivider from "../../HorizontalDivider/HorizontalDivider";
const ContactSection = () => {
	return (
		<div>
			<p style={{ margin: '20px 0px 0px -120px' }}>Contact Information</p>
			<HorizontalDivider />

			<TextField label='Email' />
			<TextField label='Personal Phone' /> <br />
			<TextField label='Work Phone (Optional)' />
			<TextField label='Ext' />
		</div>
	);
};

export default ContactSection;
