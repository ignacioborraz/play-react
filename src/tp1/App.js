import './index.css'

function App() {
  return (
    <div className='card black'>
      <h2 className='titulo white flex j-center a-center'>IGNACIO BORRAZ</h2>
      <img src='./img/sujeto1.png' alt='sujeto1' className='photo' />
      <p className='gray flex j-center a-center'>ocultar info</p>
      <div className='edad-fecha'>
        <p className='datos white r25 edad'>Edad: 32 años</p>
        <p className='datos white l25 fecha'>Fecha: 9/7/1990</p>
      </div>
      <div className='datos white flex a-center'>
        <p>Mail: ignacioborraz@hotmail.com</p>
      </div>
      <div className='datos white flex a-center'>
        <p>Comidas: lasaña y hamburguesa</p>
      </div>
      <div className='datos white flex a-center'>
        <p>Hobbies: leer manga y bailar</p>
      </div>
      <div className='flex j-center a-center'>
        <div className='gray flecha r25 flex j-center a-center'> anterior </div>
        <div className='gray flecha l25 flex j-center a-center'> siguiente </div>
      </div>
    </div>
  )
}

export default App