const Newsletter = () => {
	return (
		<div className='my-16 flex items-center justify-center flex-col py-12 md:py-16 px-6 max-w-screen-xl mx-auto rounded-[30px] bg-light relative overflow-hidden '>
			<img
				className='hidden sm:block object-cover sm:w-[200px] sm:h-[200px] xl:w-[400px] xl:h-[400px] absolute -bottom-6 -left-6'
				src='/images/newsletter-left.png'
				alt='Newsletter left'
			/>
			<img
				className='hidden sm:block object-cover sm:w-[200px] sm:h-[150px] xl:w-[400px] xl:h-[300px] absolute -bottom-6 -right-6'
				src='/images/newsletter-right.png'
				alt='Newsletter right'
			/>
			<div className='relative z-10 flex flex-col justify-center items-center'>
				<h3 className='text-dark-100 font-bold text-3xl md:text-4xl mb-5 text-center w-fit'>
				Help us serve you better with your thoughts on our delicious dishes!
				</h3>
				{/* max-w-[620px] */}
				<p className='text-dark-60 text-center  mx-auto mb-8 md:max-w-[620px] '>
				At 			
				"Welcome to <span className='font-lobster text-black font-medium '>HiraLal Di <span className='text-primary'>Rasoi</span></span>, we strive to bring you the finest vegetarian meals with flavors that remind you of home. Your feedback is invaluable in making your experience even more delightful. Let us know how we can improve or what you loved most!</p>
				<form
					action=''
					className='flex items-center justify-end relative w-[360px] sm:w-[480px] h-20 rounded-3xl bg-white overflow-hidden'
				>
					<input
						type='email'
						className='w-full text-dark-60 text-sm p-4 pr-36 indent-3 focus:outline-none'
						placeholder='Your email address...'
					/>
					<input
						type='submit'
						value='Subscribe'
						className='absolute right-3 z-10 py-5 px-8 inline-flex items-center gap-x-3 text-sm capitalize font-medium rounded-2xl transition cursor-pointer text-white bg-black hover:bg-primary'
					/>
				</form>
			</div>
		</div>
	);
};

export default Newsletter;
