import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const BasicButton = (props: { textValue: string, onClick: () => void }) => {
	return (
		<Stack
			spacing={2}
			direction='row'
		>
			<Button
				variant='contained'
				style={{ marginLeft: 200 }}
				onClick={props.onClick}
			>
				{props.textValue}
			</Button>
		</Stack>
	);
};

export default BasicButton;
