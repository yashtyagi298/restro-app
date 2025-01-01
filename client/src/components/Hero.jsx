
import React from 'react'
import UtensilsIcons from './icons/UtensilsIcons '
import TimeIcon from './icons/TimeIcon'
import PlayIcon from './icons/PlayIcon'
import Button from './Button'

const Hero = () => {
	const currentDate = new Date();
	const formattedDate = currentDate.toLocaleDateString('en-US', {
	  day: '2-digit',
	  month: 'short',
	  year: 'numeric',
	});
  
  return (
    <div className='max-w-screen-xl mx-auto py-2 px-2'>
      <div className='flex flex-col md:flex-row items-center rounded-[50px] lg:bg-light overflow-hidden relative'>
      <div className='absolute z-20 right-3 top-3 w-20 h-20 sm:w-28 sm:h-28 md:left-1/2 md:top-2 md:-translate-x-1/2'>
					<img src='/images/hero-badge.png' alt='Hero badge' />
				</div>
            {/* hero content */}
            <div className='w-full p-6 md:w-1/2 relative bg-light rounded-[50px] md:rounded-br-none md:rounded-tr-none'>
               <div className='inline-flex items-center gap-x-2 py-3 px-5 mb-5 rounded-full bg-white shadow-2xl font-semibold text-sm'>
                <img src="/images/recipe.png" alt="Hot img"/>
                Hot Recipe
                </div> 
                <h1 className='text-4xl md:text-5xl font-bold leading-[48px] md:leading-[62px] mb-3'>
                Spicy delicious Paneer Tikka
					</h1>
                    <p className='text-dark-60 mb-5'>
						
"Welcome to <span className='font-lobster text-black font-medium '>HiraLal Di <span className='text-primary'>Rasoi</span></span>, where you experience homely vegetarian meals at affordable prices. Our tiffin service ensures that you enjoy fresh, healthy, and delicious food just like home!"
					</p>
                    {/* hero button */}
                    <div className='flex items-center gap-x-5'>
						<Button link='#' icon={<TimeIcon color='black' />}>
							30 Minutes
						</Button>
						<Button link='#' target='_blank' icon={<UtensilsIcons color='black' />}>
							Paneer
						</Button>
					</div>
                    {/* hero bottom */}
                    <div className='flex flex-col sm:flex-row items-center justify-between mt-10 gap-y-4'>
						<div className='flex items-center gap-x-4 w-full sm:basis-1/3 md:basis-1/2'>
							<img
								className='w-[50px] h-[50px] object-cover'
								src='/images/user-image.png'
								alt='user image'
							/>
							<div className='flex justify-start flex-col'>
								<strong>Himanshu </strong>
								<span className='font-medium text-dark-60 text-sm'>{formattedDate}</span>
							</div>
						</div>
						<div className='w-full sm:basis-2/3 md:basis-1/2'>
							<Button link='/menu' secondary icon={<PlayIcon color='white' />}>
								Explore Menu
							</Button>
						</div>
					</div>
				</div>
                      {/* hero image */}
                      <div className='w-full h-96 mt-5 md:w-1/2 md:h-full md:scale-125 md:mt-0 lg:scale-100'>
					{/* min-w-full max-h-full min-h-full */}
					<img className='w-full rounded-tl-[50px]' src='/images/paneer-hero-img.png' alt='Hero Image' />
				</div>
            </div>

          
      </div>
   
  )
}

export default Hero
