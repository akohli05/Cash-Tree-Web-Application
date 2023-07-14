import { render, screen, fireEvent, act, within } from '@testing-library/react';
import CustomerForm from '../CustomerForm';
import { vi, expect } from 'vitest';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { invalid } from 'moment';
import { o } from 'vitest/dist/types-198fd1d9.js';

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
	})

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

			const firstRadio = screen.getByRole('radio', { name: /yes/i });
			expect(firstRadio).not.toBeChecked();

			const secondRadio = screen.getByRole('radio', { name: /no/i });
			fireEvent.click(secondRadio);
			expect(secondRadio).toBeChecked();

			expect(screen.getByLabelText('addressMailing')).toBeInTheDocument();
			expect(
				screen.getByLabelText('addressAdditionalMailing')
			).toBeInTheDocument();
			expect(screen.getByLabelText('cityMailing')).toBeInTheDocument();
			expect(screen.getByLabelText('stateMailing')).toBeInTheDocument();
			expect(screen.getByLabelText('zipcodeMailing')).toBeInTheDocument();
		})

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

			const firstRadio = screen.getByRole('radio', { name: /yes/i });
			fireEvent.click(firstRadio);
			expect(firstRadio).toBeChecked();

			const secondRadio = screen.getByRole('radio', { name: /no/i });
			expect(secondRadio).not.toBeChecked();
	})

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
				screen.getByRole('textbox', {name: /first name/i }),
				'Jane'
			);
				
			await user.type(
				screen.getByRole('textbox', { name: /middle initial \(optional\)/i }),
				'M'
			); 

			  await user.type(screen.getByRole('textbox', {name: /last name/i }),
			  'Doe'); 
				
			  //Select field
			  const suffix = screen.getByRole('selectfield', {
				name: /suffix/i
			  });
			  
			  const suffixInput = within(suffix).getByRole('textbox', {
				hidden: true
			  });

			 fireEvent.change(suffixInput,{target: {value: 'Jr.'}})
			
			//Birth Date Datefield
			const birthDate = screen.getByLabelText(/birth date/i);
			fireEvent.change(birthDate, { target: { value: '2004-01-09' }});

			await user.type(
				screen.getByRole('textbox', {name: /social security/i}),
				'123456789'
			);
			await user.type(
				screen.getByRole('textbox', { name: /mother's maiden name/i }),
				'Dale'
			);

			//Select field
			const occupation = screen.getByRole('selectfield', {
				name: /occupation/i
			  });
			  
			  const occupationInput = within(occupation).getByRole('textbox', {
				hidden: true
			  });

			 fireEvent.change(occupationInput,{target: {value: 'Accountant'}})

			 
			 //Select field
			const citizenship = screen.getByRole('selectfield', {
				name: /citizenship/i
			  });
			  
			  const citizenshipInput = within(citizenship).getByRole('textbox', {
				hidden: true
			  });

			 fireEvent.change(citizenshipInput,{target: {value: 'Andorra'}})

			await user.type(
				screen.getByRole('textbox', { name: /email/i }),
				'dev@sample.com'
			);
			await user.type( screen.getByRole('textbox', { name: /personal phone/i }),
				'704-404-4044'
			);
			await user.type(
				screen.getByRole('textbox', { name: /work phone \(optional\)/i }),
				'705-505-5055'
			);
			await user.type(
				screen.getByRole('textbox', {  name: /ext/i }),
				'1'
			);
			await user.type(
				screen.getByRole('textbox', { name: /home address/i }),
				'Rosy Red Dr.'
			);

			await user.type(
				screen.getByRole('textbox', { name: /address line 2 \(optional\)/i }),
				'Apt. 12-12'
			);
			await user.type(
				screen.getByRole('textbox', { name: /city/i }),
				'Greenville'
			);

			 //Select field
			 const state = screen.getByRole('selectfield', {
				name: /state/i
			  });
			  
			  const stateInput = within(state).getByRole('textbox', {
				hidden: true
			  });

			 fireEvent.change(stateInput,{target: {value: 'Colorado'}})

			await user.type(
				screen.getByRole('textbox', { name: /zipcode/i }),
				'23042'
			);

			const secondRadio = screen.getByRole('radio', { name: /no/i });
			fireEvent.click(secondRadio);

			const mailingAddress = screen.getByRole('textfield', { name: 'addressMailing' }); 
			const mailingInput = within(mailingAddress).getByRole('textbox', {
				name: /mailing address/i
			  });
			await user.type(
				mailingInput,
				'Green Grass Dr.'
			);

			await user.type(
				screen.getByRole('textbox', { name: /mailing address line 2 \(optional\)/i  }),
				'Apt. 13-13'
			);
			await user.type(
				screen.getByRole('textbox', { name: /mailing city/i }),
				'Greenville'
			);

			//Select field
			const stateMailing = screen.getByRole('selectfield', {
				name: /statemailing/i
			  });
			  
			  const stateMailingInput = within(stateMailing).getByRole('textbox', {
				hidden: true
			  });

			 fireEvent.change(stateMailingInput,{target: {value: 'Colorado'}}) 

			await user.type(
				screen.getByRole('textbox', { name: /mailing zipcode/i }),
				'23042'
			);

			await user.click(screen.getByRole('button', {
				name: /next/i
			  }));

			screen.debug();
			screen.logTestingPlaygroundURL();
			  
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
