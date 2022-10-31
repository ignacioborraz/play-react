export default function EdadFechaMail({campo,dato,margen,ancho}) {
  return (
    <p className={`datos white ${margen} ${ancho}`}>{campo}: {dato}</p>
  )
}
