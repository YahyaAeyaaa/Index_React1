import Button from '../Elements/Buttons/Button'
import Index from '../Elements/input/Index'

function FromRegis () {
  const handleRegister = (event) => {
    event.preventDefault()
    localStorage.setItem('Name' , event.target.text.value)
    localStorage.setItem('email' , event.target.email.value)
    localStorage.setItem('password' , event.target.password.value)
    window,location.href = 'Login'
  } 
    return (
        <form onSubmit={handleRegister}>

        <div className='mb-6'>
          <Index text="Name" 
          htmlFor="text" 
          type="text" 
          name = "text"
          placeholder="Your Name" ></Index>
        </div>

        <div className='mb-6'>
          <Index text="Email" 
          htmlFor="email" 
          type="email"
          name = "email"
          placeholder="email" ></Index>
        </div>

        <div className='mb-6'>
          <Index text="Password" 
          htmlFor="Password" 
          type="Password" 
          name = "password"
          placeholder="*****" ></Index>
        </div>
        
        <Button text="Hallo" color="bg-slate-800" className="w-full" type="submit"  ></Button>
      </form>
    )
}

export default FromRegis