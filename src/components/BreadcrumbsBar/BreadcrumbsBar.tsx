import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import styled from '@emotion/styled';

const StyledDiv = styled.div({
	position: 'relative',
	marginTop: 60,
	color: '#327d46',
	borderBottom: 'ridge rgba(211, 220, 50, .6)',
	textAlign: 'right',
});

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
	event.preventDefault();
	console.info('You clicked a breadcrumb.');
}

const BreadcrumbsBar = (props: { currentStep: number }) => {
	return (
		<StyledDiv
			role='presentation'
			onClick={handleClick}
		>
			<p style={{ display: 'inline-block', marginRight: 800 }}>
				<Typography>Step {props.currentStep} out of 3</Typography>
			</p>
			<Breadcrumbs
				aria-label='breadcrumb'
				style={{ display: 'inline-block' }}
			>
				<Link
					underline='none'
					sx={{ display: 'flex' }}
					color={props.currentStep === 1 ? '#539b05' : 'inherit'}
					fontWeight={props.currentStep === 1 ? 'bold' : 'normal'}
				>
					&#10102; Account Type
				</Link>
				<Link
					underline='none'
					sx={{ display: 'flex' }}
					color={props.currentStep === 2 ? '#539b05' : 'inherit'}
					fontWeight={props.currentStep === 2 ? 'bold' : 'normal'}
				>
					&#10103; Customer Information
				</Link>
				<Link
					underline='none' 
					sx={{ display: 'flex' }}
					color={props.currentStep === 3 ? '#539b05' : 'inherit'}
					fontWeight={props.currentStep === 3 ? 'bold' : 'normal'}
				>
					&#10104; Account Summary
				</Link>
			</Breadcrumbs>
		</StyledDiv>
	);
};

export default BreadcrumbsBar;
