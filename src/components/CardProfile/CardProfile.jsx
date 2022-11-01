import ComidaHobby from '../ComidaHobby/ComidaHobby'
import EdadFechaMail from '../EdadFechaMail/EdadFechaMail'
import NombreFoto from '../NombreFoto/NombreFoto'

export default function CardProfile({datos}) {
  return (
    <div className='card black'>
      <NombreFoto nombre={datos.nombre} foto={datos.foto}/>
      <div className='edad-fecha'>
        <EdadFechaMail campo='Edad' dato={datos.edad} margen='r25' ancho='edad' />
        <EdadFechaMail campo='Fecha' dato={datos.nacimiento} margen='l25' ancho='fecha' />
      </div>
      <EdadFechaMail campo='Mail' dato={datos.mail} />
      <ComidaHobby campo='Comidas' datos={datos.comidas} />
      <ComidaHobby campo='Hobbies' datos={datos.hobbies} />
    </div>
  )

}