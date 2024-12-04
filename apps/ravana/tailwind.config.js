const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */

module.exports = {
	darkMode: ['class'],
	content: [
		join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
		'libs/ui/src/**/!(*.stories|*.spec).{js,ts,jsx,tsx}',
		...createGlobPatternsForDependencies(__dirname),
	],
	presets: [require('../../tailwind-workspace-preset.js')],
	theme: {
		extend: {
			fontFamily: {
				sathoshi: ['var(--font-sathoshi)'],
			},
			colors: {
				brand: '#3a9545',
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				black: {
					1: '#444444',
					2: '#222B45',
					3: '#000000',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				grey: {
					1: '#F2F3F4',
					2: '#F5F5F5',
					3: '#B4AEAE',
					4: '#EFEFEF',
					bg1: '#F8FAFB',
					bg2: '#6B779A0D',
					bg3: '#eaecee',
					text1: '#D9D9D9',
					text2: '#5F5B5B',
					divider: '#D3DADD',
					border1: '#544C4C24',
					border2: '#F0F0F0',
					border3: '#E8E8E8',
					border4: '#444449',
					text3: '#9E9E9E',
				},
				red: {
					1: '#B03A2E',
					2: '#F2D7D5',
				},
			},
			borderRadius: {
				lg: `var(--radius)`,
				md: `calc(var(--radius) - 2px)`,
				sm: 'calc(var(--radius) - 4px)',
				6: '6px',
				7: '7px',
				8: '8px',
				9: '9px',
				10: '10px',
				12: '12px',
				14: '14px',
				15: '15px',
				16: '16px',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};
