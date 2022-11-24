import './index.css'
import { useEffect } from 'react'
import { Routes,Route } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import userActions from './store/actions/usuario'
import Main from './layouts/Main/Main'
import Carousel from './pages/Carousel/Carousel'
import Profile from './pages/Profile/Profile'
import Profiles from './pages/Profiles/Profiles'
import NewMentor from './pages/NewMentor/NewMentor'
import Login from './pages/Login/Login'

function App() {

  let { online } = useSelector(store => store.usuario)
  let dispatch = useDispatch()
  let { reingresar } = userActions

  useEffect(() => {
    let token = JSON.parse(localStorage.getItem('token'))
    console.log(token?.token.user)
    if (token) {
      dispatch(reingresar(token.token.user))
    }
  },[])

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