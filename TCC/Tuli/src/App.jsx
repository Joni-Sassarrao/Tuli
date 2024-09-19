import Header from "./Componentes/Header"
import Footer from "../src/Componentes/Footer"
import { Outlet } from "react-router-dom"

function App() {

  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
