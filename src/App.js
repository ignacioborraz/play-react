import './index.css'
import Main from './layouts/Main/Main'
import Carousel from './pages/Carousel/Carousel'
import Profile from './pages/Profile/Profile'
import Profiles from './pages/Profiles/Profiles'
import {Routes,Route} from 'react-router-dom'
import NewMentor from './pages/NewMentor/NewMentor';

function App() {
  return (
      <Main>
        <Routes>
          <Route path="/" element={<Carousel />} />
          <Route path="/perfiles" element={<Profiles />} />
          <Route path="/perfil/:id" element={<Profile />} />
          <Route path="/nuevo-perfil" element={<NewMentor />} />
        </Routes>  
      </Main>     
  )
}

export default App