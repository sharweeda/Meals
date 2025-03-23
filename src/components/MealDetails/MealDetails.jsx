    import React, { useEffect, useState } from "react";
    import { Link, useParams } from "react-router-dom";
    import axios from "axios";
    import { RingLoader } from "react-spinners";

    export default function MealDetails() {
    const [mealDetails, setMealDetails] = useState(null);
    const [loading, setIsLoading] = useState(true); 
    const { id } = useParams();

    useEffect(() => {
        async function getMealDetails() {
        try {
            setIsLoading(true); 
            const { data } = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
            );
            if (data.meals) {
            setMealDetails(data.meals[0]);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
        }

        getMealDetails();
    }, [id]);

    return (
        <section className="min-h-dvh">
        <div className="container">
            {loading ? (
            <div className="flex justify-center items-center min-h-[50vh]">
                <RingLoader color="#36d7b7" size={60} />
            </div>
            ) : mealDetails ? (
            <div className="pt-10">
                <h1 className="font-bold text-4xl ">{mealDetails.strMeal}</h1>
                
                <div className="flex flex-wrap justify-center mt-4 gap-6">
                <img
                    src={mealDetails.strMealThumb}
                    className="w-[30%] rounded-2xl"
                    alt={mealDetails.strMeal}
                />
                <p className="max-w-[60%]">{mealDetails.strInstructions}</p>
                </div>

        
                <div className="flex flex-wrap gap-4 mt-6">
                {mealDetails.strYoutube && (
                    <Link
                    to={mealDetails.strYoutube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 text-white bg-red-600 rounded-2xl flex items-center"
                    >
                    <i className="fa-brands fa-youtube mx-2"></i> Youtube
                    </Link>
                )}

                {mealDetails.strSource && (
                    <Link
                    to={mealDetails.strSource}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 text-white bg-green-600 rounded-2xl flex items-center"
                    >
                    <i className="fa-solid fa-globe mx-2"></i> Source
                    </Link>
                )}
                </div>
            </div>
            ) : (
            <h2 className="text-center text-2xl text-red-500 font-bold">No Meal Found</h2>
            )}
        </div>
        </section>
    );
    }
