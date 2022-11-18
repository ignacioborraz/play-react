import NombreFoto from '../NombreFoto/NombreFoto'
import {Link as LinkRouter} from "react-router-dom"

export default function CardProfile({datos}) {
  return (
    <LinkRouter to={`/perfil/${datos._id}`}>
    <div className='card black'>
      <NombreFoto nombre={datos.nombre} foto={datos.foto}/>
    </div>
    </LinkRouter>
  )

}