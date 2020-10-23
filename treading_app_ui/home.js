

const verify=async ()=>{
  const token=localStorage.getItem('token')
  console.log(token)
if(token){
  const response=await fetch('http://localhost:3000/feed/new',{
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
        'auth-token':JSON.parse(token).message
      } 
 
    })
    console.log(response)
  const message=await response.json()
  console.log(message)
  if(message._id){
    return;
  }else{
    const main=document.querySelector('#main')
    main.innerHTML=`<h1>404 not found</h1>`
  
  }
}else{
  const main=document.querySelector('#main')
  main.innerHTML=`<h1>404 not found</h1>`
}

}
const logout_btn=document.querySelector('#logout')

logout_btn.addEventListener('click',()=>{logout()})

const logout=()=>{
  localStorage.removeItem('token')
  window.location.href='http://127.0.0.1:5500/login.html'
}


verify()
