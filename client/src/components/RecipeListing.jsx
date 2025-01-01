/* eslint-disable react/prop-types */
import { recipes } from '../data/recipes';
import Recipe from './Recipe';

const RecipeListing = ({ secondary }) => {
	return(
		<div className='max-w-screen-xl mx-auto my-16 px-2'>
			<h3 className='text-center text-3xl md:text-4xl xl:text-5xl font-bold mb-5 mt-0'>
				Simple and tasy Categories
			</h3>
			<p className='max-w-3xl mx-auto text-dark-60 text-center'>
				Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqut enim ad minim
			</p>
			<div className='flex justify-between xl:justify-center xl:gap-x-[3%] flex-wrap mt-10'>
				{recipes.primary.map(recipe => {
					return (
						<Recipe
							key={recipe.id}
							title={recipe.title}
							imgUrl={recipe.imageUrl}
							time={recipe.time}
							type={recipe.type}
						/>
					);
				})}
			</div>
		</div>
    )
};

export default RecipeListing;
