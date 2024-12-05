import { ArrowRight } from 'lucide-react';

export default function Contact() {
	return (
		<div>
			<div className="space100"></div>
			<div className="space100"></div>
			<div className="contact-page">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="contact-boxs">
								<div className="heading1">
									<h2>Contact Information</h2>
									<div className="space16"></div>
									<p>
										We Have grown up with the internet revolution, and we <br />{' '}
										know how to deliver on its
									</p>
								</div>
								<div className="contact-box">
									<div className="icon flex justify-center items-center">
										<img src="/icons/contact-page-icon1.png" alt="" />
									</div>
									<div className="heading">
										<h5>Contact Us</h5>
										<a href="tel:(124)555-6565" className="text">
											(124) 555-6565
										</a>
									</div>
								</div>

								<div className="contact-box">
									<div className="icon flex justify-center items-center">
										<img src="/icons/contact-page-icon2.png" alt="" />
									</div>
									<div className="heading">
										<h5>Send Us a Mail</h5>
										<a href="mailto:hire2retire.co.in" className="text">
											hire2retire.co.in
										</a>
									</div>
								</div>

								<div className="contact-box">
									<div className="icon flex justify-center items-center">
										<img src="/icons/contact-page-icon3.png" alt="" />
									</div>
									<div className="heading">
										<h5>Office Location</h5>
										<a href="tel:(124)555-6565" className="text">
											73 Bridge St Brooklyn Arakansas <br /> 85032 United
											States, NY 10018
										</a>
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-6">
							<div className="contact-form-details">
								<form action="#">
									<div className="row">
										<div className="col-lg-6">
											<div className="single-input">
												<input type="text" placeholder="First Name" />
											</div>
										</div>
										<div className="col-lg-6">
											<div className="single-input">
												<input type="text" placeholder="Last Name" />
											</div>
										</div>

										<div className="col-lg-6">
											<div className="single-input">
												<input type="email" placeholder="Email" />
											</div>
										</div>

										<div className="col-lg-6">
											<div className="single-input">
												<input type="number" placeholder="Phone" />
											</div>
										</div>
										<div className="col-lg-12">
											<div className="single-input">
												<input type="text" placeholder="Subject" />
											</div>
										</div>

										<div className="col-lg-12">
											<div className="single-input">
												<textarea
													cols={30}
													rows={5}
													placeholder="Message"
												></textarea>
											</div>
										</div>

										<div className="col-lg-12">
											<button className="theme-btn1 !flex justify-center items-center">
												Submit{' '}
												<span>
													<ArrowRight />
												</span>
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="space100"></div>
		</div>
	);
}
