import { Link as LinkRouter } from 'react-router-dom'
import './navBar.css'

const pages = [
    { name: 'Home', to: '/' },
    { name: 'Perfiles', to: '/perfiles' },
    { name: 'Nuevo Perfil', to: '/nuevo-perfil' }
]


export default function NavBar() {
    
    const link = (page) => <LinkRouter className='NavBar-link' to={page.to} key={page.name}>{page.name}</LinkRouter>

    return (
        <div className="NavBar-container">
            {pages.map(link)}
        </div>
    )
}