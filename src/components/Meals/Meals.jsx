import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { RingLoader } from 'react-spinners';
import { Link } from 'react-router-dom';

export default function Meals() {
    const [categories, setCategories] = useState([]);
    const [selectCategory, setSelectCategory] = useState("All");
    const [meals, setMeals] = useState([]);
    const [loading, setIsLoading] = useState(false);

    async function getAllCategories() {
        try {
            setIsLoading(true);
            const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`);
            setCategories(data.categories);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    async function getMealsCategories(selectCategory) {
        try {
            setIsLoading(true);
            const { data } = await axios.get(`${selectCategory === "All" ? "https://www.themealdb.com/api/json/v1/1/search.php?s=" : `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectCategory}`}`);
            setMeals(data.meals || []);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getAllCategories();
    }, []);

    useEffect(() => {
        getMealsCategories(selectCategory);
    }, [selectCategory]);

    return (
        <div className='min-h-dvh pt-4'>
            <h1 className='font-bold text-4xl text-[#EF8E29] script'>Learn, Cook, Eat Your Food</h1>
            
            
            <ul className='flex flex-wrap gap-x-2.5 gap-y-1 mt-5'>
                <li onClick={() => setSelectCategory("All")} className={`${selectCategory === 'All' ? 'bg-green-500 text-white' : 'border-gray-300'} mx-2 border-[1px] py-2 px-3 rounded-2xl mt-2 cursor-pointer`}>
                    All
                </li>
                {categories.map((category) => (
                    <li onClick={() => setSelectCategory(category.strCategory)} key={category.idCategory} 
                        className={`${selectCategory === category.strCategory ? 'bg-green-500 text-white' : 'border-gray-300'} mx-2 border-[1px] py-2 px-3 rounded-2xl mt-2 cursor-pointer`}>
                        {category.strCategory}
                    </li>
                ))}
            </ul>

        
            {loading ? (
                <div className='flex justify-center items-center min-h-[50vh]'>
                    <RingLoader color="#36d7b7" size={60} />
                </div>
            ) : (
                <div className='flex flex-wrap'>
                    {meals.map((meal) => (
                        <div key={meal.idMeal} className='sm:w-full md:w-[50%] lg:w-[33.333333%] xl:w-[25%] text-center p-4'>
                            
                            
                            <div className='group bg-white rounded-2xl shadow-3xl overflow-hidden transition-transform transform hover:scale-105'>
                                
                        
                                <img 
                                    src={meal.strMealThumb} 
                                    className='w-[50%] m-auto rounded-full p-2 transition-transform duration-500 group-hover:rotate-[360deg]' 
                                    alt={meal.strMeal} 
                                />

                                <h2>{meal.strMeal}</h2>
                                {meal.strArea !== undefined && <h3 className='text-[#059669]'><span className='mx-2'><i className="fa-solid fa-earth-americas"></i></span>{meal.strArea}</h3>}
                                

                                <Link to={`/mealdetails/${meal.idMeal}`} 
                                    className='py-2 px-3 block m-auto my-2 text-white bg-green-500 hover:bg-[#059669] text-xl rounded-full w-[50%]'>
                                    View Recipe
                                </Link>
                            </div>

                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
