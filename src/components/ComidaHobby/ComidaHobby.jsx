export default function ComidaHobby(props) {
  let campo = props.campo
  let datos = props.datos
  return (
    <div className='datos white flex a-center'>
      <p>{campo}: {datos.join(" y ")}</p>
    </div>
  )
}
