
import { ArrowRight } from 'lucide-react'
import images from '../assets/images'
import { NavLink, json, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

export default function SignIn() {
  const navigate = useNavigate()

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  function checkUseraccount (e) {
    e.preventDefault()

    axios.post("http://localhost:3000/api/user/auth",formData)
    .then((res) => {
      if(res.data.email === formData.email && res.data.password === formData.password){
        setIsLoggedIn(true)

        if(isLoggedIn){
          localStorage.setitem("token", json.stringify(res.data))
          navigate("/game")
        }
      }

    })
    .catch((err) => console.error(err))
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  }
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign In</h2>
            <p className="mt-2 text-sm text-gray-600">
              Don&apos;t have an account?{' '}
              <a
                href="#"
                title=""
                className="font-semibold text-black transition-all duration-200 hover:underline"
              >
                <NavLink to="/SignUp">Create a free account</NavLink>
              </a>
            </p>
            <form onSubmit={checkUseraccount} className="mt-8">
              <div className="space-y-5">
                <div>
                  <label htmlFor="" className="text-base font-medium text-gray-900">
                    {' '}
                    Email address{' '}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="" className="text-base font-medium text-gray-900">
                      {' '}
                      Password{' '}
                    </label>
                    
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      name='password'
                      value={formData.password}
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Get started <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            </form>
            
          </div>
        </div>
        <div className="h-full w-full">
          <img
            className="mx-auto h-full w-full rounded-md object-cover p-20"
            src={images.Logo}
            alt=""
          />
        </div>
      </div>
    </section>
  )
}
