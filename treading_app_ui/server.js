
const FETCH_USER_DATA=async ()=>{
  const response=await  fetch('http://localhost:3000/admin/userlist')
  const data= await response.json();
  SHOW_DATA(data)
}

const SHOW_DATA=(users)=>{
  users.forEach(element => {
       const table_body=document.querySelector('#table_body')
       const tablerow=document.createElement('tr')
       const namedata=document.createElement('td')
       const emaildata=document.createElement('td')
       const datedata=document.createElement('td')
       const delete_button=document.createElement('td')
       console.log(element._id) 
       namedata.innerText=`${element.username}`
       emaildata.innerText=`${element.email}`
       datedata.innerText=`${element.Date}`
       delete_button.innerHTML=`<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
       <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
       <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
     </svg>`
      delete_button.style.cursor='pointer'
     
       tablerow.appendChild(namedata)
       tablerow.appendChild(emaildata)
       tablerow.appendChild(datedata)
       tablerow.appendChild(delete_button)
       table_body.appendChild(tablerow)
       delete_button.addEventListener('click',()=>{DELETEDATA(element._id)})
      
  });
}

const DELETEDATA=async (id)=>{
    const delete_user=await fetch(`http://localhost:3000/admin/userlist/${id}`, {
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
       
      }
     
    })
    const res=await delete_user.json()
    console.log(res)
    location.reload(); 

}

FETCH_USER_DATA();

