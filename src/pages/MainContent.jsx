import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Navbar from "./Navbar"

function MainContent() {
  
  return (
    <main className="h-screen">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </main>
  )
}

export default MainContent