//get All movie
export async function getAllMoiviesService (){
    const res = await fetch('https://movie-api-get-only-bmc3.vercel.app/api',{cache:'no-cache'})
    console.log(Date);
    //concert json to javascript
    const data = res.json();
    return data;
}
//get movies by movie 
    export async function getGenreMovie (movie){
    const res = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api?genre=${movie}`,{cache:'no-cache'})
    const data = res.json();
    return data;
}
//getbyId
    export async function getbyId (id){
    const res = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api/${id}`)
    const data = res.json();
    return data;
}
