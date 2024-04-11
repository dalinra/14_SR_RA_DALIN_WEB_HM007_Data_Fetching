import React from 'react'
import Image from 'next/image'
import CardComponent from '@/components/CardComponent'
import image from '../../public/image/moviesim.jpg'
import { getAllMoiviesService } from '@/services/movies.service'
import AllMovieCardComponent from '@/components/AllMovieCardComponent'

const page = async() => {
  const data = await getAllMoiviesService();
  
  const getGenre = new Set(); 

  data.payload.forEach(dataGenre => {
    if(dataGenre.genre){
      getGenre.add(dataGenre.genre)
    }
  });
  const uniqueGenre = Array.from(getGenre); 
  console.log(" Loop Genre : ", uniqueGenre)

  return (
    <div>
      <div className=' w-full h-screen '>
        <Image className='-z-40 w-full h-full opacity-90' src={image}   fill={true} alt="Picture of the author"/>
      </div>
      <div className='bg-red-950 -mt-20'>
      <div className=' w-full  px-10'>
          <h1  className=' text-xl text-white py-4'> ALL Movies &gt;</h1>
          <AllMovieCardComponent datas={data}/>
        </div>
        {uniqueGenre.map((genre)=>(
          <div className=' w-full  px-10'>
          <h1  className=' text-xl text-white py-4'>{genre} Movie &gt;</h1>
          <CardComponent datas={genre}/>
        </div>
        ))}
      </div>
    </div>    
  )
}

export default page;