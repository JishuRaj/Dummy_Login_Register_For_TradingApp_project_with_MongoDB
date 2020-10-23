const submit_form = document.querySelector('#submit')
const username = document.querySelector('#username')
const password = document.querySelector('#password')

submit_form.addEventListener('submit', async(e)=>{
  e.preventDefault()
 try{
  const data = {
    username:username.value,
    password:password.value
  }
  const response = await fetch('http://localhost:3000/api/login', {
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(data)
  })
  const message = await response.json();
  if(message.error){
    throw message.error
  }
  console.log(message)
  localStorage.setItem('token', JSON.stringify(message))
  window.location.href='http://127.0.0.1:5500/home.html'
 }catch(err){
   console.log(err)
 }
})