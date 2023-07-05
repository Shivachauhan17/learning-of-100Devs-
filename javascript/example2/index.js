document.querySelector('#check').addEventListener('click',check)

function check(){
    const input_given=document.querySelector('#day').value 
    if(input_given==="monday" || input_given==="Tuesday"){
        alert('aagya')
        document.querySelector('#placeholder').innerText='Monday'
    }

}