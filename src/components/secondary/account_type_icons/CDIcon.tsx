import styled from '@emotion/styled';
import { IconButton } from '@mui/material';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';

//Circle Div Outline
const StyledCircle = styled(IconButton)({
	'padding': 4,
	'borderRadius': '50%',
	'borderStyle': 'solid',
	'borderWidth': '2px',
	'borderColor': '#d9b234',
	'backgroundColor': '#d9b234',
	'height': 68,
	'width': 68,
	'&:hover': {
		background: '#d9b234',
	},
});

const StyledCDIcon = styled(EmojiEventsOutlinedIcon)({
	outlineWidth: 1,
	backgroundColor: '#d9b234',
	fontSize: 48,
});

const CDIcon = () => {
	return (
		<StyledCircle>
			<StyledCDIcon />
		</StyledCircle>
	);
};

export default CDIcon;
