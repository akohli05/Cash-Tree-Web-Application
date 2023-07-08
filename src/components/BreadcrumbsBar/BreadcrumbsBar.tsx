import * as React from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Link, useLocation } from 'react-router-dom';
import './BreadcrumbStyles.css';
import { useContext, useEffect, useState } from 'react';
import { ApplicationContext } from '../../context/ApplicationContext';

const StyledDiv = styled('div')(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-between',
	position: 'relative',
	padding: 8,
	color: '#327d46',
	borderBottom: 'ridge rgba(211, 220, 50, .6)',
	[theme.breakpoints.down('md')]: {
		flexDirection: 'column',
	},
}));

const LinksContainer = styled('div')(({ theme }) => ({
	[theme.breakpoints.down('sm')]: {
		display: 'block',
		width: '280px',
		height: 'auto',
	},
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
	[theme.breakpoints.down('sm')]: {
		display: 'block',
	},
}));

const StyledButton = styled('button')(({ theme }) => ({
	display: 'none',
	[theme.breakpoints.down('sm')]: {
		display: 'inline',
		backgroundColor: 'rgb(218, 242, 250)',
		fontSize: 25,
		borderRadius: '50%',
	},
}));

const StyledLink = styled(Link)({
	textDecoration: 'none',
	margin: 5,
	fontSize: 15,
	pointerEvents: 'none',
});

interface BreadcrumbsBarProps {
	currentStep: number;
}

const BreadcrumbsBar: React.FC<BreadcrumbsBarProps> = ({ currentStep }) => {
	const location = useLocation();

	const [toggleMenu, setToggleMenu] = useState(false);
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);

	const toggleNav = () => {
		setToggleMenu(!toggleMenu);
	};

	useEffect(() => {
		const changeWidth = () => {
			setScreenWidth(window.innerWidth);
		};

		window.addEventListener('resize', changeWidth);

		return () => {
			window.removeEventListener('resize', changeWidth);
		};
	}, []);

	return (
		<StyledDiv id='styledDiv'>
			<StyledTypography>Step {currentStep} out of 3</StyledTypography>

			<nav>
				<StyledButton
					id='navButton'
					onClick={toggleNav}
				>
					{toggleMenu ? <>&#10005;</> : <>&#9776;</>}
				</StyledButton>

				{(toggleMenu || screenWidth > 600) && (
					<LinksContainer>
						<StyledLink
							to='#'
							className={
								location.pathname === '/'
									? 'breadcrumb-active items '
									: 'breadcrumb-not-active items'
							}
						>
							&#10102; Account Type
						</StyledLink>
						<span className='breadcrumbs-slash'>&#47;</span>
						<StyledLink
							to='#'
							className={
								location.pathname.startsWith('/customer-form')
									? 'breadcrumb-active items'
									: 'breadcrumb-not-active items'
							}
						>
							&#10103; Customer Information
						</StyledLink>
						<span className='breadcrumbs-slash'>&#47;</span>

						<StyledLink
							to='#'
							className={
								location.pathname === '/summary'
									? 'breadcrumb-active items'
									: 'breadcrumb-not-active items'
							}
						>
							&#10104; Account Summary
						</StyledLink>
					</LinksContainer>
				)}
			</nav>
		</StyledDiv>
	);
};

export default BreadcrumbsBar;
