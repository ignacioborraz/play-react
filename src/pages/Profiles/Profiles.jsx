import React, {useEffect,useState,useRef} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import userActions from '../../store/actions/usuario'
import CardProfile from '../../components/CardProfile/CardProfile'

export default function Profiles() {

  let [recarga,setRecarga] = useState(false)
  let text = useRef()
  let dispatch = useDispatch()
  let { obtenerUsuarios } = userActions

  let perfiles = useSelector(store => store.usuario.perfiles)

  useEffect(()=> {
    let value = text.current.value.trim()
    dispatch(obtenerUsuarios(value))
  },[recarga])

  return (
    <div className='flex column a-center'>
      <input type="text" placeholder='buscar por nombre' ref={text} onKeyUp={()=>setRecarga(!recarga)} />
     <div className='flex wrap j-center'>
        {perfiles?.map((cadaPerfil,index) => <CardProfile key={index} datos={cadaPerfil}/>)}
      </div>
    </div>
  )

}