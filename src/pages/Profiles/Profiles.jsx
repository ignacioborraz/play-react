import React, {useEffect,useRef} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import userActions from '../../store/actions/usuario'
import CardProfile from '../../components/CardProfile/CardProfile'
import NewMentor from './../NewMentor/NewMentor';

export default function Profiles() {

  let text = useRef()
  let dispatch = useDispatch()
  let { obtenerUsuarios } = userActions

  const { perfiles, value } = useSelector(store => store.usuario)

  useEffect(()=> {
    if (value==="") {
      filtrar()
    } else {
      dispatch(obtenerUsuarios(value))
    }
  },[])

  function filtrar() {
    let texto = text.current.value.trim()
    dispatch(obtenerUsuarios(texto))
  }

  return (
    <div className='flex column a-center'>
      <input type="text" placeholder='buscar por nombre' ref={text} onKeyUp={filtrar} />
     <div className='flex wrap j-center'>
        {perfiles?.map((cadaPerfil,index) => <CardProfile key={index} datos={cadaPerfil}/>)}
      </div>
      <NewMentor />
    </div>
  )

}