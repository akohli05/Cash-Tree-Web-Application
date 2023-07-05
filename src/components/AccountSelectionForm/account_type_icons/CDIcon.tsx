import styled from '@emotion/styled';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import StyledCircle from './StyledCircle';

const StyledCDIcon = styled(EmojiEventsOutlinedIcon)({
	'outlineWidth': 1,
	'backgroundColor': '#d9b234',
	'fontSize': 48,
	'@media (max-width: 600px)': {
		fontSize: 20,
	},
});

const CDIcon = () => {
	return (
		<StyledCircle backgroundColor='#d9b234'>
			<StyledCDIcon />
		</StyledCircle>
	);
};

export default CDIcon;
