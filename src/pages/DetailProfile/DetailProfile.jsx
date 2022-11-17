import perfiles from '../../perfiles'
import ComidaHobby from '../../components/ComidaHobby/ComidaHobby'
import EdadFechaMail from '../../components/EdadFechaMail/EdadFechaMail'
import NombreFoto from '../../components/NombreFoto/NombreFoto'
import {useParams} from 'react-router-dom'

export default function DetailProfile() {
  let {numero} = useParams()
  console.log(perfiles[numero].foto)
  return (
    <div className='card black'>
      <NombreFoto nombre={perfiles[numero].nombre} foto={perfiles[numero].foto}/>
      <div className='edad-fecha'>
        <EdadFechaMail campo='Edad' dato={perfiles[numero].edad} margen='r25' ancho='edad' />
        <EdadFechaMail campo='Fecha' dato={perfiles[numero].nacimiento} margen='l25' ancho='fecha' />
      </div>
      <EdadFechaMail campo='Mail' dato={perfiles[numero].mail} />
      <ComidaHobby campo='Comidas' datos={perfiles[numero].comidas} />
      <ComidaHobby campo='Hobbies' datos={perfiles[numero].hobbies} />
    </div>
  )

}