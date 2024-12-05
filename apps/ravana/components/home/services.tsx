import Link from 'next/link';

const data = [
	{
		icon: '/icons/service-icon3.png',
		title: '100% Coverage',
		desc: 'We provide End to End to HR process and Doccuments.',
		addClass: 'col-lg-4',
	},
	{
		icon: '/icons/service-icon4.png',
		title: 'Expert TEAM',
		desc: 'TOP HR Professional worked in all major brands. 127+ Years of HR expereince together.',
		addClass: 'col-lg-4',
	},
	{
		icon: '/icons/service-icon5.png',
		title: 'Simple & affordable',
		desc: 'Clean and non complex engagment process to work with you.',
		addClass: 'col-lg-4',
	},
];

const Services = () => {
	return (
		<div className="service sp py-[54px]">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 m-auto text-center">
						<div className="heading1">
							<h2 className="title tg-element-title">Why H2R</h2>
						</div>
					</div>
				</div>

				<div className="space30"></div>
				<div className="row">
					{data.map((item, i) => (
						<div
							key={i}
							className={item.addClass}
							data-aos="zoom-in-up"
							data-aos-duration="700"
						>
							<div className="single-box">
								<div className="icon flex justify-center items-center">
									<img src={item.icon} alt="" />
								</div>
								<div className="heading1">
									<h4>
										<Link href="/">{item.title}</Link>
									</h4>
									<div className="space16"></div>
									<p>{item.desc}</p>
									<div className="space16"></div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Services;
