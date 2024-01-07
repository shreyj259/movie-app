import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Main from "./components/pages/Main"
import MoviePage from "./components/pages/MoviePage"

function App() {

  return (
    <>
     <Navbar />
     <BrowserRouter>
     <Routes>
      <Route path="/"  element={<Main/>} />
      <Route path="movie/:id" element={<MoviePage/>} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
