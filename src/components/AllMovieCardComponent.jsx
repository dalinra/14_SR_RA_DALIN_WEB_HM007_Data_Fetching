import React from 'react';
import Link from 'next/link';
import { getGenreMovie } from '@/services/movies.service';

const AllMovieCardComponent = async({datas}) => {
  console.log("All Card Component: ", datas)
  return (
    <div>
      <div className=' flex flex-no-wrap gap-4 overflow-x-scroll w-full no-scrollbar'>  
        {datas.payload.map((data)=>(
      <Link key={data.movie_id  } class="p-1.5 border border-indigo-300  flex-none rounded-lg hover:shadow-xl w-[20%]
       items-center bg-white" href={`/view-movie-details/${data.movie_id}`} >
        <div className=''>
            <img src={data.image == ""? "../image/moviesim.jpg":data.image} className="shadow rounded-lg  border w-full "/>
        </div>
        <div className="mt-8 w-full"> 
          <h4 className="font-bold text-xl line-clamp-1">{data.movie_title}</h4>
          <p className="mt-2 text-gray-600 line-clamp-2">{data.description}</p>
      </div>
      </Link>
    ) )}
   </div> 
    </div>
  )
}

export default AllMovieCardComponent;