async function getAPhoto(){
    try{
        const res = await fetch('https://any-anime.p.rapidapi.com/anime/img')
        const data = await res.json()
        console.log(data)
    }

    catch(error){
        console.log(error)
    }
}
getAPhoto()
