import { render, screen, fireEvent, act } from '@testing-library/react';
import CustomerForm from '../components/CustomerForm/CustomerForm';
import { vi, expect } from 'vitest';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('CustomerForm', () => {
	it('render the correct nested components', async () => {
		const mockSave = vi.fn();

		act(() => {
			render(
				<BrowserRouter>
					<Routes>
						<Route
							path='/'
							element={<CustomerForm onSave={mockSave} />}
						/>
					</Routes>
				</BrowserRouter>
			);
		});

		//Make sure all fields are rendered correctly
		expect(
			screen.getByRole('textfield', { name: 'firstName' })
		).toBeInTheDocument();
		//expect(screen.getByLabelText('firstName')).toBeInTheDocument();
		expect(screen.getByLabelText('middleInitial')).toBeInTheDocument();
		expect(screen.getByLabelText('lastName')).toBeInTheDocument();
		expect(screen.getByLabelText('workPhone')).toBeInTheDocument();
		expect(screen.getByLabelText('birthDate')).toBeInTheDocument();
		expect(screen.getByLabelText('socialSecurity')).toBeInTheDocument();
		expect(screen.getByLabelText('maidenNameOfMother')).toBeInTheDocument();
		expect(screen.getByLabelText('occupation')).toBeInTheDocument();
		expect(screen.getByLabelText('citizenship')).toBeInTheDocument();

		expect(screen.getByLabelText('email')).toBeInTheDocument();
		expect(screen.getByLabelText('personalPhone')).toBeInTheDocument();
		expect(screen.getByLabelText('workPhone')).toBeInTheDocument();
		expect(screen.getByLabelText('phoneExtension')).toBeInTheDocument();

		expect(screen.getByLabelText('address')).toBeInTheDocument();
		expect(screen.getByLabelText('addressAdditional')).toBeInTheDocument();
		expect(screen.getByLabelText('city')).toBeInTheDocument();
		expect(screen.getByLabelText('state')).toBeInTheDocument();
		expect(screen.getByLabelText('zipcode')).toBeInTheDocument();

		expect(screen.getByLabelText('Yes')).toBeInTheDocument;
		expect(screen.getByLabelText('No')).toBeInTheDocument;

		expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument();
	}),
		it('Shows the mailing address form section upon No radio button selected', async () => {
			const mockSave = vi.fn();

			act(() => {
				render(
					<BrowserRouter>
						<Routes>
							<Route
								path='/'
								element={<CustomerForm onSave={mockSave} />}
							/>
						</Routes>
					</BrowserRouter>
				);
			});

			const firstRadio = screen.getByLabelText('Yes');
			expect(firstRadio).not.toBeChecked();

			const secondRadio = screen.getByLabelText('No');
			fireEvent.click(secondRadio);
			expect(secondRadio).toBeChecked();

			expect(screen.getByLabelText('addressMailing')).toBeInTheDocument();
			expect(
				screen.getByLabelText('addressAdditionalMailing')
			).toBeInTheDocument();
			expect(screen.getByLabelText('cityMailing')).toBeInTheDocument();
			expect(screen.getByLabelText('stateMailing')).toBeInTheDocument();
			expect(screen.getByLabelText('zipcodeMailing')).toBeInTheDocument();
		}),
		it('Does not the mailing address form section upon Yes radio button selected', async () => {
			const mockSave = vi.fn();

			render(
				<BrowserRouter>
					<Routes>
						<Route
							path='/'
							element={<CustomerForm onSave={mockSave} />}
						/>
					</Routes>
				</BrowserRouter>
			);

			const firstRadio = screen.getByLabelText('Yes');
			fireEvent.click(firstRadio);
			expect(firstRadio).toBeChecked();

			const secondRadio = screen.getByLabelText('No');
			expect(secondRadio).not.toBeChecked();
		}),
		it('Validate the customer form fields', async () => {
			// setup userEvent
			function setup(jsx: any) {
				return {
					user: userEvent.setup(),
					...render(jsx),
				};
			}

			const mockSave = vi.fn();

			const { user } = setup(
				<BrowserRouter>
					<Routes>
						<Route
							path='/'
							element={<CustomerForm onSave={mockSave} />}
						/>
					</Routes>
				</BrowserRouter>
			);

			//Fill in all fields
			await user.type(
				screen.getByRole('textfield', { name: 'firstName' }),
				'Jane'
			);
			await user.type(
				screen.getByRole('textfield', { name: 'middleInitial' }),
				'M'
			);
			await user.type(
				screen.getByRole('textfield', { name: 'lastName' }),
				'Doe'
			);

			const suffix = screen.getByRole('selectfield', { name: 'suffix' });
			await userEvent.click(suffix);
			fireEvent.change(suffix, { 'data-value': 'Jr.' });

			const birthDate = screen.getByRole('datefield', { name: 'birthDate' });
			await userEvent.click(birthDate);
			fireEvent.change(birthDate, { value: '2004-01-09' });

			await user.type(
				screen.getByRole('textfield', { name: 'socialSecurity' }),
				'123456789'
			);
			await user.type(
				screen.getByRole('textfield', { name: 'maidenNameOfMother' }),
				'Dale'
			);
			const occupation = screen.getByRole('selectfield', {
				name: 'occupation',
			});
			await userEvent.click(occupation);
			fireEvent.change(occupation, { 'data-value': 'Accountant' });

			const citizenship = screen.getByRole('selectfield', {
				name: 'citizenship',
			});
			await userEvent.click(citizenship);
			fireEvent.change(citizenship, { 'data-value': 'Andorra' });

			await user.type(
				screen.getByRole('textfield', { name: 'email' }),
				'dev@sample.com'
			);
			await user.type(
				screen.getByRole('textfield', { name: 'personalPhone' }),
				'704-404-4044'
			);
			await user.type(
				screen.getByRole('textfield', { name: 'workPhone' }),
				'705-505-5055'
			);
			await user.type(
				screen.getByRole('textfield', { name: 'phoneExtension' }),
				'1'
			);
			await user.type(
				screen.getByRole('textfield', { name: 'address' }),
				'Rosy Red Dr.'
			);

			await user.type(
				screen.getByRole('textfield', { name: 'addressAdditional' }),
				'Apt. 12-12'
			);
			await user.type(
				screen.getByRole('textfield', { name: 'city' }),
				'Greenville'
			);

			const state = screen.getByRole('selectfield', {
				name: 'state',
			});
			await userEvent.click(state);
			fireEvent.change(state, { 'data-value': 'Colorado' });

			await user.type(
				screen.getByRole('textfield', { name: 'zipcode' }),
				'23042'
			);

			const secondRadio = screen.getByLabelText('No');
			fireEvent.click(secondRadio);

			await user.type(
				screen.getByRole('textfield', { name: 'addressMailing' }),
				'Green Grass Dr.'
			);
			await user.type(
				screen.getByRole('textfield', { name: 'addressAdditionalMailing' }),
				'Apt. 13-13'
			);
			await user.type(
				screen.getByRole('textfield', { name: 'cityMailing' }),
				'Greenville'
			);

			const stateMailing = screen.getByRole('selectfield', {
				name: 'stateMailing',
			});
			await userEvent.click(stateMailing);
			fireEvent.change(stateMailing, { 'data-value': 'Colorado' });

			await user.type(
				screen.getByRole('textfield', { name: 'zipcodeMailing' }),
				'23042'
			);

			await user.click(screen.getByRole('button', { name: 'Next' }));

			expect(mockSave).toHaveBeenCalledWith(
				expect.objectContaining({
					firstName: 'Jane',
					middleInitial: 'M',
					lastName: 'Doe',
					suffix: 'Jr.',
					birthDate: '2004-01-09',
					socialSecurity: '123456789',
					maidenNameOfMother: 'Dale',
					occupation: 'Accountant',
					citizenship: 'Andorra',
					email: 'dev@sample.com',
					personalPhone: '704-404-4044',
					workPhone: '705-505-5055',
					phoneExtension: '1',
					address: 'Rosy Red Dr.',
					addressAdditional: 'Apt. 12-12',
					city: 'Greenville',
					state: 'Colorado',
					zipcode: '23042',
					isHomeandMailingSame: 'No',
					addressMailing: 'Green Grass Dr.',
					addressAdditionalMailing: 'Apt. 13-13',
					cityMailing: 'Greenville',
					stateMailing: 'Colorado',
					zipcodeMailing: '23042',
				})
			);
		});
});
