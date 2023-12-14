import { Outlet } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"

function App() {

  return (
    <>
    <Navbar/>
    <div className="min-h-[calc(100vh-75px)] lg:min-h-[calc(100vh-82px)] py-[25px] px-[10px] h-[100%]">
      <Outlet/>
    </div>
    </>
  )
}

export default App
