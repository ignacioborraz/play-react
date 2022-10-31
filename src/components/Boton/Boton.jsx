export default function Boton({tipo,margen,onClick}) {
  return (
    <div className={`gray flecha ${margen} flex j-center a-center`} onClick={onClick}> {tipo} </div>
  )
}
