try{
async function getAPhoto(){
    const res = await fetch('https://any-anime.p.rapidapi.com/anime/img')
    const data = await res.json()
    console.log(data)
}
getAPhoto()
}
catch(error){
    console.log(error)
}