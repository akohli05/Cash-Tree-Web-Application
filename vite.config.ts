import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: 'jsdom',
		include: ['**/_tests_/*.{js,tsx,ts}'],
		setupFiles: './src/testSetup.ts',
	},
});
