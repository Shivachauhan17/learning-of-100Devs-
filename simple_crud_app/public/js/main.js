const deleteText = document.querySelectorAll('.fa-trash')
const thumbText = document.querySelectorAll('.fa-thumbs-up')

Array.from(deleteText).array.forEach(element => {
    element.addEventListner('click',deleteRapper)
})

Array.from(thumbText).array.forEach(element=>{
    element.addEventListner('click',addLike)
})

async function deleteRapper(){
    const sName=this.parentNode.childnode[2].innerText
    const bName=this.parentNode.childnode[2].innerText 
    try{
        const response = await fetch('deleteRapper',{
            'method':'delete',
            'headers':{'Content-Type':'application/json'},
            body: JSON.stringify({
                'stageNameS':sName,
                'birthNameS':bName
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }
    catch(error){
        crossOriginIsolated.log(error)
    }
}