
import React from 'react'
import { Menu, X } from 'lucide-react'
import images from '../assets/images'
import './Footer'
import { NavLink } from 'react-router-dom'

const menuItems = [
  {
    name: 'Home',
    href: '',
  },
  {
    name: 'Game',
    href: '/game',
  },
  {
    name: 'AboutUs',
    href: '/AboutUs'
  }
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }


  return (
    <div className="relative w-full bg-gray-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8  ">
        <div className="inline-flex items-center space-x-2 rounded">

            <img src={images.Logo} alt="" width="100px"/>

          <span className="font-bold text-2xl">Number Guessing</span>
        </div>
        <div className="hidden lg:block ">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.href}
                  className="text-sm font-semibold text-black hover:text-black text-xl"
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="hidden lg:block">
          <NavLink to='/SignIn'><button
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white 
            shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 
            focus-visible:outline-offset-2 focus-visible:outline-black mx-1" >
            SignIn
          </button></NavLink>
          
          <NavLink to='/SignUp'><button
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white
             shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2
              focus-visible:outline-offset-2 focus-visible:outline-black mx-1">
            SignUp
          </button></NavLink>
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2 rounded">
                   
                        <img src={images.logo} alt=""  />

                    <span className="font-bold">Number Guessing</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 
                      text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline 
                      focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900 text-2xl">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
                <NavLink to="/SignIn">
                <button
                  type="button"
                  className="mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold 
                  text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 
                  focus-visible:outline-offset-2 focus-visible:outline-black">
                  SignIn
                </button></NavLink>
                <NavLink to="/SignUp">
                <button
                  type="button"
                  className="mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold 
                  text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 
                  focus-visible:outline-offset-2 focus-visible:outline-black">
                  SignUp
                </button></NavLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
