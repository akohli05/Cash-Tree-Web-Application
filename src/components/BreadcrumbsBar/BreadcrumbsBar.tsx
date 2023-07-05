import * as React from 'react';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import { Link, useLocation } from 'react-router-dom';
import './BreadcrumbStyles.css';
import { useEffect, useState } from 'react';

const StyledDiv = styled.div({
	display: 'flex',
	justifyContent: 'space-between',
	position: 'relative',
	padding: 8,
	color: '#327d46',
	borderBottom: 'ridge rgba(211, 220, 50, .6)',
});

const StyledLink = styled(Link)({
	textDecoration: 'none',
	margin: 5,
	fontSize: 15,
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
			<Typography id='counter'>Step {currentStep} out of 3</Typography>

			<nav>
				<button id= 'navButton' onClick={toggleNav}>
					{toggleMenu ? <>&#10005;</> : <>&#9776;</>}
				</button>

				{(toggleMenu || screenWidth > 600) && (
					<div id='list'>
						<StyledLink
							to='/'
							className={
								location.pathname === '/'
									? 'breadcrumb-active items'
									: 'breadcrumb-not-active items'
							}
						>
							&#10102; Account Type
						</StyledLink>
						<span className='breadcrumbs-slash'>&#47;</span>
						<StyledLink
							to='/customer-form'
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
							to='/summary'
							className={
								location.pathname === '/summary'
									? 'breadcrumb-active items'
									: 'breadcrumb-not-active items'
							}
						>
							&#10104; Account Summary
						</StyledLink>
					</div>
				)}
			</nav>
		</StyledDiv>
	);
};

export default BreadcrumbsBar;
