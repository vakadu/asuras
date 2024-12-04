import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
	e2e: {
		...nxE2EPreset(__filename, {
			cypressDir: 'src',
			webServerCommands: { default: 'yarn nx run ravana:dev' },
			ciWebServerCommand: 'yarn nx run ravana:serve-static',
			ciBaseUrl: 'http://localhost:3000',
		}),
		baseUrl: 'http://127.0.0.1:3000',
	},
});
