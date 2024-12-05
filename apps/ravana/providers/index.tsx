'use client';

import 'bootstrap/dist/css/bootstrap.css';
import { Toaster } from '@asuras/ui';

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			{children}
			<Toaster closeButton richColors position="bottom-left" />
		</>
	);
};

export default Providers;
