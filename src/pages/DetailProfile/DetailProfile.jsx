import perfiles from '../../perfiles'
import ComidaHobby from '../../components/ComidaHobby/ComidaHobby'
import EdadFechaMail from '../../components/EdadFechaMail/EdadFechaMail'
import NombreFoto from '../../components/NombreFoto/NombreFoto'

export default function DetailProfile() {

  return (
    <div className='card black'>
      <NombreFoto nombre={perfiles[0].nombre} foto={perfiles[0].foto}/>
      <div className='edad-fecha'>
        <EdadFechaMail campo='Edad' dato={perfiles[0].edad} margen='r25' ancho='edad' />
        <EdadFechaMail campo='Fecha' dato={perfiles[0].nacimiento} margen='l25' ancho='fecha' />
      </div>
      <EdadFechaMail campo='Mail' dato={perfiles[0].mail} />
      <ComidaHobby campo='Comidas' datos={perfiles[0].comidas} />
      <ComidaHobby campo='Hobbies' datos={perfiles[0].hobbies} />
    </div>
  )

}