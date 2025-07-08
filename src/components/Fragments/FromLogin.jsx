import Button from '../Elements/Buttons/Button'
import Index from '../Elements/input/Index'
import { useState } from 'react'

function From() {
  const [error, setError] = useState("") // buat nampilin error kalo email/password salah

  const handleLogin = (event) => {
    event.preventDefault()

    const DataEmail = localStorage.getItem('email')
    const DataPassword = localStorage.getItem('password')

    const inputEmail = event.target.email.value
    const inputPassword = event.target.password.value

    if (inputEmail === DataEmail && inputPassword == DataPassword) {
      return window.location.href = '/Products'
    } else {
      setError("Email Dan Password Ga Cocok")
      
    }
  }
  

    // Cek kecocokan


  return (
    <form onSubmit={handleLogin}>
      <div className='mb-1'>
        <Index text="Email"
          htmlFor="Email"
          type="email"
          name="email"
          placeholder="email" />
      </div>

      <div className='mb-3'>
        <Index text="Password"
          htmlFor="password"
          type="password"
          name="password"
          placeholder="*****" />
      </div>

      {error && <p className="text-red-600 text-sm mb-2">{error}</p>}

      <Button text="Hallo" color="bg-slate-800" className="w-full" type="submit" />
    </form>
  )
}

export default From
