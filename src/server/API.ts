import axios, { AxiosError, AxiosResponse } from 'axios';
import { AccountType, Customer } from '../context/ApplicationContext';

const baseUrl: string = 'http://localhost:4000';

export const addAccountType = async (
  accountTypeFormData: AccountType[]
): Promise<AxiosResponse> => {
  try {
    const accountTypes = {
      accountTypes: accountTypeFormData,
    };
    const saveTodo: AxiosResponse = await axios.post(
      baseUrl + '/add-account-type',
      accountTypes,
      { headers: { 'Content-Type': 'application/json' } }
    );
    return saveTodo;
  } catch (error) {
    throw error;
  }
};

export const addCustomer = async (
  customerFormData: Customer
): Promise<AxiosResponse> => {
  try {
    const customer: Omit<Customer, 'isHomeandMailingSame'> = {
      firstName: customerFormData.firstName,
      middleInitial: customerFormData.middleInitial,
      lastName: customerFormData.lastName,
      suffix: customerFormData.suffix,
      birthDate: customerFormData.birthDate,
      socialSecurity: customerFormData.socialSecurity,
      maidenNameOfMother: customerFormData.maidenNameOfMother,
      occupation: customerFormData.occupation,
      citizenship: customerFormData.citizenship,
      email: customerFormData.email,
      personalPhone: customerFormData.personalPhone,
      workPhone: customerFormData.workPhone,
      phoneExtension: customerFormData.phoneExtension,
      address: customerFormData.address,
      addressAdditional: customerFormData.addressAdditional,
      city: customerFormData.city,
      state: customerFormData.state,
      zipcode: customerFormData.zipcode,
      addressMailing: customerFormData.addressMailing,
      addressAdditionalMailing: customerFormData.addressAdditionalMailing,
      cityMailing: customerFormData.cityMailing,
      stateMailing: customerFormData.stateMailing,
      zipcodeMailing: customerFormData.zipcodeMailing,
    };
    const saveTodo: AxiosResponse = await axios.post(
      baseUrl + '/add-customer',
      customer,
      { headers: { 'Content-Type': 'application/json' } }
    );
    return saveTodo;
  } catch (error) {
    throw error;
  }
};
