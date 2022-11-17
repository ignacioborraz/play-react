import './index.css'
import Carousel from './pages/Carousel/Carousel'
import DetailProfile from './pages/DetailProfile/DetailProfile'
import Profiles from './pages/Profiles/Profiles'
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
      <Main>
        <Routes>
          <Route path="/" element={<Carousel />} />
          <Route path="profiles" element={<Profiles />} />
          <Route path="profile/:numero" element={<DetailProfile />} />
        </Routes>  
      </Main>     
  )
}

export default App