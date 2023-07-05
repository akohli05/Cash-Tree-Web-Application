import AppBar from '@mui/material/AppBar';
import styled from '@emotion/styled';

const StyledAppBar = styled(AppBar)({
	display: 'flex',
	backgroundColor: '#c1dc86',
	position: 'sticky',
	top: 0,
	left: 0,
	color: '#327d46',
	paddingLeft: 10,
});

const Header = () => {
	return (
		<StyledAppBar>
			<img
				src='/logo.png'
				style={{ height: 57, width: 75 }}
			/>
		</StyledAppBar>
	);
};

export default Header;
