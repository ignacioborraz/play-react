import './index.css'
import Carousel from './pages/Carousel/Carousel'
import DetailProfile from './pages/DetailProfile/DetailProfile'
import Profiles from './pages/Profiles/Profiles'
import Main from './layouts/Main/Main'

function App() {
  return (
    <>
      {/* <Carousel /> */}
      {/* <DetailProfile /> */}
      {/* <Profiles /> */}
      <Main texto='la propiedad children se genera cuando el componente tiene hijos'>
        <Carousel />
      </Main>
    </>
  )
}

export default App