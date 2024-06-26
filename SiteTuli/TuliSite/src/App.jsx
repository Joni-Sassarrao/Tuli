import { Outlet } from "react-router-dom";
import Header from "./Componentes/Header";

export default function App() {
  return ( 
    <>
    <Header/>
    <Outlet/>
    </>
  )
}