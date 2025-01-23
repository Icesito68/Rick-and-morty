import './App.css'

import NavBar from "./components/navBar.jsx";
import {Routes, Route} from "react-router-dom";
import Inicio from "./pages/Inicio.jsx";
import Contacto from "./pages/Contacto.jsx";
import {Blog, BlogCharacter} from "./pages/Blog.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
      <div className='App'>
        <NavBar></NavBar>
          <Routes>
            <Route element={<Inicio/>} path="/"></Route>
            <Route element={<Contacto/>} path="/contacto"></Route>
            <Route element={<Blog/>} path="/blog"></Route>
            <Route element={<BlogCharacter/>} path="/blog/:id"></Route>
            <Route element={<NotFound/>} path="*"></Route>
          </Routes>
      </div>
  )
}

export default App
