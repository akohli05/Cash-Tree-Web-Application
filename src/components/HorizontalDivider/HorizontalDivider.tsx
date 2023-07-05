import styled from '@emotion/styled';

const StyledDivider = styled.hr({
	'border-top': '2px solid #bbb',
	'opacity': '15%',
	'width': 800,
});

const HorizontalDivider = () => {
	return <StyledDivider />;
};

export default HorizontalDivider;
