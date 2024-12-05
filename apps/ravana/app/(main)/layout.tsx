'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header1({ children }: { children: React.ReactNode }) {
	const [mobileToggle, setMobileToggle] = useState(false);
	const [isSticky, setIsSticky] = useState('');
	const [prevScrollPos, setPrevScrollPos] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.scrollY;
			if (currentScrollPos > prevScrollPos) {
				setIsSticky('cs-gescout_sticky');
			} else if (currentScrollPos !== 0) {
				setIsSticky('cs-gescout_show cs-gescout_sticky');
			} else {
				setIsSticky('');
			}
			setPrevScrollPos(currentScrollPos);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [prevScrollPos]);

	return (
		<div>
			<div className="header-area2 header_nav_03">
				<header
					className={`cs_site_header cs_style_1 cs_sticky_header cs_site_header_full_width ${
						mobileToggle ? 'cs_mobile_toggle_active' : ''
					} ${isSticky ? isSticky : ''}`}
				>
					<div className="cs_top_header">
						<div className="container">
							<div className="row">
								<div className="col-lg-12">
									<div className="pera">
										<p>
											<img
												src="/assets/img/icons/header-top-span.png"
												alt=""
											/>{' '}
											A Professional Technology & It Solution Company Based On
											World
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="cs_main_header cs_accent_bg">
						<div className="container">
							<div className="cs_main_header_in">
								<div className="cs_main_header_left">
									<Link className="cs_site_branding" href="/">
										<span className="text-24 font-black text-[#e67e22]">
											Hire 2 Retire
										</span>
									</Link>
								</div>

								<div className="cs_main_header_center1">
									{/* <div className="cs_nav cs_primary_font fw-medium">
									<span
										className={
											mobileToggle
												? 'cs-munu_toggle cs_teggle_active'
												: 'cs-munu_toggle'
										}
										onClick={() => setMobileToggle(!mobileToggle)}
									>
										<span></span>
									</span>
									<Nav setMobileToggle={setMobileToggle} />
								</div> */}
								</div>
								<div className="cs_main_header_right header_right_one">
									<div className="header1-buttons">
										<div className="contact-btn">
											<div className="icon flex justify-center items-center">
												<img src="/icons/header1-icon.png" alt="" />
											</div>
											<div className="headding">
												<p>Make a Call</p>
												<a href="tel:124(555)6565">124 (555) 6565</a>
											</div>
										</div>
										<div className="button">
											<Link href="/contact" className="theme-btn1">
												Get A Quote
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>
			</div>
			{children}
		</div>
	);
}
