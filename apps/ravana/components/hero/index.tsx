'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Hero() {
	useEffect(() => {
		const backgroundElements = document.querySelectorAll('[data-background]');

		backgroundElements.forEach((element) => {
			const image = element.dataset.background;
			if (image) {
				element.style.backgroundImage = `url('${image}')`;
			}
		});
	}, []);

	return (
		<div className="hero_main_area1">
			<div className="hero1" data-background="/images/hero-bg.png">
				<div className="container">
					<div className="row">
						<div className="col-lg-5">
							<div className="main-headding">
								<span
									className="span"
									data-aos="zoom-in-left"
									data-aos-duration="700"
								>
									{/* <img src="/assets/img/icons/span1.png" alt="" /> {subTitle} */}
								</span>
								<h1 className="title tg-element-title">
									We Empower your Business{' '}
									<span className="after">IT Solutions</span>
								</h1>
								<div className="space16"></div>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
									repellendus quod eaque explicabo facilis voluptate, minima non
									excepturi provident numquam obcaecati consequuntur adipisci
									fugit accusantium totam alias saepe voluptatibus suscipit?
								</p>

								<div className="space30"></div>
								<div className="buttons">
									<Link href="/" className="theme-btn1">
										Get Started Now
										<span>
											<ArrowRight />
										</span>
									</Link>
								</div>
							</div>
						</div>

						<div className="col-lg-7">
							<div className="hero1-all-images">
								<div className="image1 ">
									<img src="/images/hero1-image1.png" alt="" />
								</div>
								<div className="image2">
									<img src="/images/hero1-image2.png" alt="" />
								</div>
								<div className="image3 shape-animaiton3">
									<img src="/images/hero1-image3.png" alt="" />
								</div>
								<div className="image4 shape-animaiton3">
									<img src="/images/hero1-image4.png" alt="" />
								</div>
								<div className="shape1">
									<img src="/shapes/header1-shape1.png" alt="" />
								</div>
								<div className="shape2">
									<img src="/shapes/header1-shape2.png" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
