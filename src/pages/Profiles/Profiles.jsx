import React, {useEffect,useState} from 'react'
import CardProfile from '../../components/CardProfile/CardProfile'

export default function Profiles() {
  let [perfiles,setPerfiles] = useState([])
  //el fetch solo no da error, pero para react es un efecto incontrolado
  //vamos a controlar el efecto del asincronismo
  //a través de un hoook de efecto
  useEffect(()=> {
    fetch('./perfiles.json') //entre comillas va la URL de la API o el JSON que se quiera fetchear
      .then(res=>res.json())
      //.then(res=>console.log(res))
      .then(res=> setPerfiles(res))
      .catch(error=> console.log(error.message))
      //esto la reasignacion y la reasignacion no RE-RENDERIZA EL COMPONENTE
      //la forma correcta de re-renderizar el componente es con useState
        //ya que el estado inicial de perfiles e un array vacio
        //y el estado final de perfiles es un array cargado
      // eslint-disable-next-line
  },[])
  console.log(perfiles)
  //useEffect recibe dos parámetros
    //el primero es una funcion que se va a ejecutar cuando se monte el componente
    //el segundo es un array que contiene las variables que lo van a ejecutar luego de su montaje
    //aca van las variables que van a ejecutar el efecto cada vez que varie la variables

  return (
    <div className='flex wrap'>
      {perfiles?.map((cadaPerfil,index) => <CardProfile key={index} datos={cadaPerfil}/>)}
      {/* {perfiles.map((cadaPerfil) => <CardProfile key={cadaPerfil.nombre} datos={cadaPerfil}/>)} */}
      {/* la key suele ser el ID de cada elemento a MAPEAR (de la base de datos) */}
      {/* la KEY es una propiedad que necesita SI O SI cada hijo del map */}
      {/* en nuestro caso, el objeto no tiene ID propio por lo que tengo que */}
      {/* adoptar el index (predefinido) del map */}
      {/* en caso de que la renderizacion suceda antes que la carga de datos */}
      {/* para que no de error y se espere la correcta carga */}
      {/* se coloca antes del .map el signo de preguntas */}
      {/* el signo de preguntas funciona como un await */}
    </div>
  )

}