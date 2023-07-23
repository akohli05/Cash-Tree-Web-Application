import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { ApplicationContext } from '../../context/ApplicationContext';
import { useContext } from 'react';
import { Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BasicButton from '../Button/Button';
import { addAccountType, addCustomer } from '../../server/API';

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  padding: '0px 100px',

  [theme.breakpoints.down('md')]: {
    marginLeft: 'auto',
    padding: 20,
  },

  [theme.breakpoints.down('sm')]: {
    padding: 10,
  },
}));

const Section = styled(Box)({
  textAlign: 'center',
  backgroundColor: '#f7f6f2',
  boxShadow: '0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)',
});

const Wrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  rowGap: 8,
  marginTop: 16,
});

const Summary = () => {
  const applicationContext = useContext(ApplicationContext);
  const navigate = useNavigate();

  //Account Type
  const accountTypes = applicationContext.state.accountTypes;

  /**
   * Customer Data
   */
  const {
    firstName,
    lastName,
    middleInitial,
    suffix,
    birthDate,
    socialSecurity,
    maidenNameOfMother,
    occupation,
    citizenship,
    email,
    personalPhone,
    workPhone,
    phoneExtension,
    address,
    addressAdditional,
    city,
    state,
    zipcode,
    isHomeandMailingSame,
    addressMailing,
    addressAdditionalMailing,
    cityMailing,
    stateMailing,
    zipcodeMailing,
  } = applicationContext.state.customer;

  const  accountTypesWithSpace = accountTypes.join(', ');
  return (
    <StyledBox>
      <Container>
        <Wrapper>
          <Section>
            <h5>Account Types(s)</h5>
            <p>{accountTypesWithSpace}</p>
          </Section>
          <Section>
            <h5>Primary Owner</h5>
            <p>First Name: {firstName}</p>
            {middleInitial && <p>Middle Initial (Optional): {middleInitial}</p>}
            <p>Last Name: {lastName}</p>
            {suffix && <p>Suffix (Optional): {suffix}</p>}
            <p>Birth Date: {birthDate}</p>
            <p>Social Security: {socialSecurity}</p>
            <p>Mother's Maiden Name: {maidenNameOfMother}</p>
            <p>Occupation: {occupation}</p>
          </Section>
          <Section>
            <h5>Citizenship</h5>
            <p>Citizenship: {citizenship}</p>

            <h5>Contact</h5>
            <p>Email: {email}</p>
            <p>Personal Phone: {personalPhone}</p>
            {workPhone && <p>Work Phone (Optional): {workPhone}</p>}
            <p>Phone Extension: {phoneExtension}</p>
          </Section>
          <Section>
            <h5>Home Address</h5>
            <p>Address: {address}</p>
            {addressAdditional && (
              <p>Additional Address: {addressAdditional}</p>
            )}
            <p>City: {city}</p>
            <p>State: {state}</p>
            <p>Zip Code: {zipcode}</p>
          </Section>
          <Section>
            <h5>Mailing Address</h5>
            {isHomeandMailingSame === 'No' ? (
              <>
                <p>Address: {addressMailing}</p>
                {addressAdditionalMailing && (
                  <p>Additional Address: {addressAdditionalMailing}</p>
                )}
                <p>City: {cityMailing}</p>
                <p>State: {stateMailing}</p>
                <p>Zip Code: {zipcodeMailing}</p>
              </>
            ) : (
              'Mailing address is the same as the home address.'
            )}
          </Section>
        </Wrapper>
        <BasicButton text='Back' onClick={() => navigate('/customer-form')} />

        <BasicButton
          text='Next'
          onClick={() => {
            addAccountType(applicationContext.state.accountTypes);
            addCustomer(applicationContext.state.customer);
            navigate('/confirmation');
          }}
        />
      </Container>
    </StyledBox>
  );
};

export default Summary;
