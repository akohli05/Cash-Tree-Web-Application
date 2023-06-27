import styled from '@emotion/styled';

const StyledDivider = styled.hr({
	'border-top': '2px solid #bbb',
	'opacity': '15%',
	'width': 800,
	'margin': '0px 0px 10px -120px',
});

const HorizontalDivider = () => {
	return <StyledDivider />;
};

export default HorizontalDivider;
