const submit_button = document.querySelector('#submit_user')
const user_name = document.querySelector('#username')
const user_email = document.querySelector('#email')
const user_password = document.querySelector('#password')

submit_button.addEventListener('submit', async(e)=>{
  e.preventDefault()
  try{
    const data = {
      username:user_name.value,
      email:user_email.value,
      password:user_password.value
    }
    const response = await fetch('http://localhost:3000/api/register', {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    })
    const message = await response.json()
    if(message.error){
      throw message.error
    }
    window.location.href='http://127.0.0.1:5500/index.html'
  }catch(err){
    const alert = document.createElement('div')
    alert.classList.add('alert')
    alert.classList.add('alert-primary')
    alert.textContent=err
    submit_button.appendChild(alert)
    setTimeout(()=>{
      submit_button.removeChild(alert)
    },5000)

  }
})