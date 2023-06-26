import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';

const StyledAppBar = styled(AppBar)({
	backgroundColor: '#c1dc86',
	fontFamily: '',
	position: 'fixed',
	height: '60px',
	top: 0,
	color: '#327d46',
});

const Header = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<StyledAppBar>
				<Toolbar>
					<Typography
						variant='h6'
						component='div'
						sx={{ flexGrow: 1 }}
					>
						<img src='/logo.png' style={{height: 57}}/>
					</Typography>
				</Toolbar>
			</StyledAppBar>
		</Box>
	);
};

export default Header;
