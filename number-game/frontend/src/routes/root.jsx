import {Outlet} from "react-router-dom"
import Header from "../components/Header"
import Footer from '../components/Footer'

function root() {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default root
