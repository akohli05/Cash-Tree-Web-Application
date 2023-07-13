import { render, screen, act } from '@testing-library/react';
import AccountSelectionForm from '../components/AccountSelectionForm/AccountSelectionForm';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

describe('AccountSelectionForm', () => {
	it('Renders the correct nested components', async () => {
		const mockSave = vi.fn();

		act(() => {
			render(
				<BrowserRouter>
					<Routes>
						<Route
							path='/'
							element={<AccountSelectionForm onSave={mockSave} />}
						/>
					</Routes>
				</BrowserRouter>
			);
		});

		expect(screen.getByLabelText('Savings')).toBeInTheDocument();
		expect(screen.getByLabelText('Money Market')).toBeInTheDocument();
		expect(screen.getByLabelText('Certificate of Deposit')).toBeInTheDocument();
		expect(screen.getByLabelText('Spending')).toBeInTheDocument();

		expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument();
	}),
		it('Validate the account type form fields', async () => {
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
							element={<AccountSelectionForm onSave={mockSave} />}
						/>
					</Routes>
				</BrowserRouter>
			);

			await user.click(screen.getByLabelText('Savings'));

			await user.click(screen.getByRole('button', { name: 'Next' }));

			expect(mockSave).toHaveBeenCalledWith({
				accountTypes: ['Savings'],
			});
		});
});
