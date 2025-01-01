import Logo from './Logo';

const Footer = () => {
	return (
		<div className='max-w-screen-xl mx-auto mt-16 pb-8 px-2'>
			{/* Footer upper */}
			<div className='flex flex-col xl:flex-row items-center justify-center pb-8 border-b'>
				<div className='w-full flex flex-col items-center justify-center xl:w-1/2 xl:items-start'>
					<Logo className='text-center xl:text-left' />
					<a id="about-us" className='text-dark-60 text-center text-sm mt-3'>
						Address - Sector 76 Noida Near Metro station 
					</a>
				</div>
				
			</div>
			{/* Footer bottom */}
			<div className='flex justify-center items-center'>
				<p className='text-center text-dark-60 m-0 pt-2 z-20'>
					&copy; {new Date().getFullYear()} Powered by CodeShree
				</p>
			</div>
		</div>
	);
};

export default Footer;
