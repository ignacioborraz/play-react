import { Link as LinkRouter } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import userActions from '../../store/actions/usuario'
import './navBar.css'

const pages = [
    { name: 'Home', to: '/' },
    { name: 'Perfiles', to: '/perfiles' },
    { name: 'Nuevo Perfil', to: '/nuevo-perfil' },
    { name: 'Ingresar', to: '/ingresar' }
]


export default function NavBar() {

    let { online,token } = useSelector(store => store.usuario)
    let dispatch = useDispatch()
    let { salir } = userActions

    async function cerrarSesion(event) {
        let res = await dispatch(salir(token))
        console.log(res)        
    }

    const link = (page) => <LinkRouter className='NavBar-link' to={page.to} key={page.name}>{page.name}</LinkRouter>

    return (
        <div className="NavBar-container">
            {pages.map(link)}
            {online && <div className='NavBar-link' onClick={()=>cerrarSesion(token)} >Salir</div>}
        </div>
    )
}