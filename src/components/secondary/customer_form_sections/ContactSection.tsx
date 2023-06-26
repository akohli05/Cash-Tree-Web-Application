import TextField from '../Textfield';

const ContactSection = () => {
	return (
		<div>
			<TextField label='Email' />
			<TextField label='Personal Phone' /> <br />
			<TextField label='Work Phone (Optional)' />
			<TextField label='Ext' />
		</div>
	);
};

export default ContactSection;
