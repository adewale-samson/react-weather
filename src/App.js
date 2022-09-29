import "./App.css"
import Navbar from "./Components/Navbar/Navbar.jsx";
import Main from './Pages/Main/Main';
// import { Route, Routes } from "react-router-dom";





const App = () => {
  
  return (
    <div className="sidePadding">
      <Navbar />
      <Main />
      {/* <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='Services' element={<Services />}/>
      </Routes>
      <Footer/> */}
    </div>
  )
}

export default App
