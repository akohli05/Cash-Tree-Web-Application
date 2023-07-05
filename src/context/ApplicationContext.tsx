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
	socialSecurity: number;
	maidenNameOfMother: string;
	occupation: string;
	citizenship: string;
	email: string;
	personalPhone: string;
	workPhone?: string;
	phoneExtension: string;
	address: string;
	addressAdditional: string;
	city: string;
	state: string;
	zipcode: string;
	mailingRadioButtonGroup: string;
	addressMailing: string;
	addressAdditionalMailing: string;
	cityMailing: string;
	stateMailing: string;
	zipcodeMailing: string;
}

export interface Application {
	accountType: AccountType[];
	customer: Customer;
}

export interface ApplicationContextModel {
	state: Application;
	updateAccountType: (accountType: AccountType[]) => void;
	updateCustomer: (customer: Customer) => void;
}

const ApplicationContext = createContext<ApplicationContextModel>({
	state: {} as Application,
	updateAccountType: () => {},
	updateCustomer: () => {},
});

const ApplicationProvider = ({ children }: { children: React.ReactNode }) => {
	const [application, setApplication] = useState<Application>(
		{} as Application
	);

	const updateAccountType = (updatedAccountType: AccountType[]) => {
		const newApplicationObject: Application = {
			...application,
			...{ accountType: updatedAccountType },
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
		updateAccountType: updateAccountType,
		updateCustomer: updateCustomer,
	};

	return (
		<ApplicationContext.Provider value={value}>
			{children}
		</ApplicationContext.Provider>
	);
};

export default ApplicationProvider;
