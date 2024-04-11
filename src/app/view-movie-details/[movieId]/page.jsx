import { getbyId } from '@/services/movies.service'
import React from 'react'
import Image from 'next/image'
import star from '../../../../public/image/star.png'; 

// function stars(s){
//     let a = Math.round(s); 
//     let result ; 
//     let d ='*'
//     for (let i = 0 ; i < a ; a ++){ 
//         result =+ d ;
//     }
//     return result; 
// }

const page = async({params}) => {
    const data = await getbyId(params.movieId);
    const dataMovie = data.payload; 
    console.log("data from : ",data);
    // const f  = stars(4); 
    // console.log(" Test Star : ", f )
    const star = Math.round(dataMovie.rating);
    const postedDate = new Date(dataMovie?.posted_at);
    const formattedDate =
    postedDate.toLocaleDateString("en-US", { 
        year: "numeric",
        month: "short",
        day: "numeric",
    }) 
    ", " +
    postedDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
    });

  return (
    <div> 
        <div className="h-screen -m-24 bg-red-950 dark:bg-gray-800 pt-36">
        <div className="w-screen mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4 px-10">
            <div className="md:flex px-4 w-[68%]">
                <div className="h-[550px] w-full rounded-lg bg-gray-300 dark:bg-white mb-4 mr-5">
                    <img className="w-full h-full rounded-lg " src={dataMovie.image== ""?"../image/moviesim.jpg": dataMovie.image} alt="Product Image"/>
                </div>
            </div>
            <div className="md:flex-1 pl-3">
                <h2 className="text-2xl font-bold text-white dark:text-white mb-2">{dataMovie.director}</h2>
                <p className="text-white dark:text-gray-300 text-sm ">
                    {dataMovie.runtime} minutes
                </p>
                <p className='text-white dark:text-gray-300 text-sm'>{dataMovie.genre}</p>
                <div className="flex mb-4">
                    { star ==1? '⭐️' : star ==2? '⭐️⭐️': star == 3? '⭐️⭐️⭐️': star == 4? '⭐️⭐️⭐️⭐️': '⭐️⭐️⭐️⭐️⭐️'}
                </div>
                <div>
                    <span className="font-bold text-white  dark:text-gray-300">{dataMovie.movie_title}(2008)</span>
                <p className="text-white dark:text-gray-300 text-sm mt-2">{dataMovie.description}</p>
                </div>
                <div className='mt-16'>
                    <p className='text-white'>{formattedDate}</p>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default page;