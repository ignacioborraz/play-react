import './index.css'
import { Routes,Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Main from './layouts/Main/Main'
import Carousel from './pages/Carousel/Carousel'
import Profile from './pages/Profile/Profile'
import Profiles from './pages/Profiles/Profiles'
import NewMentor from './pages/NewMentor/NewMentor'
import Login from './pages/Login/Login'



function App() {
  let { online } = useSelector(store => store.usuario)
  return (
      <Main>
        <Routes>
          <Route path="/" element={<Carousel />} />
          <Route path="/perfiles" element={<Profiles />} />
          <Route path="/perfil/:id" element={<Profile />} />
          <Route path="/nuevo-perfil" element={online ? <Carousel /> : <NewMentor />} />
          <Route path="/ingresar" element={online ? <Carousel /> : <Login />} />
        </Routes>  
      </Main>     
  )
}

export default App