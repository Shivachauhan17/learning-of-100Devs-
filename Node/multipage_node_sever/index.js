document.querySelector('#clickMe').addEventListener('click',makeReq)

async function makeReq(){
    const username = document.querySelector("#username").value 
    console.log(username)

    const res = await fetch(`/api?student= ${username}`)
    const data = await res.json()

    console.log(data);
    document.querySelector('#personName').textContent = data.name
    document.querySelector('#personStatus').textContent = data.status
    document.querySelector('personOccupation').textContent = data.currentOccupation
}