import localFont from 'next/font/local';

import '../assets/css/global.css';

export const metadata = {
	title: 'Hire to Retire',
	description: 'Hire to Retire',
	themeColor: '#ffffff',
	icons: {
		icon: [
			{ rel: 'icon', url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
			{ rel: 'icon', url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
			{ rel: 'icon', url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
		],
		apple: [
			{ rel: 'apple-touch-icon', url: '/favicon/apple-icon-57x57.png', sizes: '57x57' },
			{ rel: 'apple-touch-icon', url: '/favicon/apple-icon-60x60.png', sizes: '60x60' },
			{ rel: 'apple-touch-icon', url: '/favicon/apple-icon-72x72.png', sizes: '72x72' },
			{ rel: 'apple-touch-icon', url: '/favicon/apple-icon-76x76.png', sizes: '76x76' },
			{ rel: 'apple-touch-icon', url: '/favicon/apple-icon-120x120.png', sizes: '120x120' },
			{ rel: 'apple-touch-icon', url: '/favicon/apple-icon-144x144.png', sizes: '144x144' },
			{ rel: 'apple-touch-icon', url: '/favicon/apple-icon-152x152.png', sizes: '152x152' },
			{ rel: 'apple-touch-icon', url: '/favicon/apple-icon-180x180.png', sizes: '180x180' },
		],
		other: [
			{ rel: 'manifest', url: '/favicon/manifest.json' },
			{ rel: 'msapplication-TileImage', url: '/favicon/ms-icon-144x144.png' },
		],
	},
};

const sathoshi = localFont({
	src: [
		{
			path: '../assets/fonts/sathoshi/Satoshi-Light.otf',
			weight: '300',
			style: 'normal',
		},
		{
			path: '../assets/fonts/sathoshi/Satoshi-Regular.otf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../assets/fonts/sathoshi/Satoshi-Medium.otf',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../assets/fonts/sathoshi/Satoshi-Bold.otf',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../assets/fonts/sathoshi/Satoshi-Black.otf',
			weight: '700',
			style: 'normal',
		},
	],
	variable: '--font-sathoshi',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={`${sathoshi.variable} font-sathoshi scroll-smooth`}>
			<body>{children}</body>
		</html>
	);
}
