import { createContext, useState } from 'react';

export type AccountType =
	| 'Savings'
	| 'Money Market'
	| 'Certificate of Deposit'
	| 'Spending';

export interface Customer {
	firstName: string;
	middleInitial?: string;
	lastName: string;
	suffix?: string;
	birthDate: string;
	socialSecurity: string;
	maidenNameOfMother: string;
	occupation: string;
	citizenship: string;
	email: string;
	personalPhone: string;
	workPhone?: string;
	phoneExtension: string;
	address: string;
	addressAdditional?: string;
	city: string;
	state: string;
	zipcode: string;
	isHomeandMailingSame: string,
	addressMailing: string;
	addressAdditionalMailing?: string;
	cityMailing: string;
	stateMailing: string;
	zipcodeMailing: string;
}

export interface Application {
	accountTypes: AccountType[];
	customer: Customer;
}

export interface ApplicationContextModel {
	state: Application;
	updateAccountTypes: (accountTypes: AccountType[]) => void;
	updateCustomer: (customer: Customer) => void;
}

export const ApplicationContext = createContext<ApplicationContextModel>({
	state: {} as Application,
	updateAccountTypes: () => {},
	updateCustomer: () => {},
});

const ApplicationProvider = ({ children }: { children: React.ReactNode }) => {
	const [application, setApplication] = useState<Application>(
		{} as Application
	);

	const updateAccountTypes = (updatedAccountTypes: AccountType[]) => {
		const newApplicationObject: Application = {
			...application,
			...updatedAccountTypes,
		};
		setApplication(newApplicationObject);
	};

	const updateCustomer = (updatedCustomer: Customer) => {
		const newApplicationObject: Application = {
			...application,
			...{ customer: updatedCustomer },
		};
		setApplication(newApplicationObject);
	};

	const value = {
		state: application,
		updateAccountTypes: updateAccountTypes,
		updateCustomer: updateCustomer,
	};

	return (
		<ApplicationContext.Provider value={value}>
			{children}
		</ApplicationContext.Provider>
	);
};

export default ApplicationProvider;
