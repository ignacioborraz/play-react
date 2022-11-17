import React from 'react'
import NavBar from '../../components/NavBar/NavBar'

export default function Main(props) {
  //console.log(props)
  //console.log(props.children)
  return (
    <div className='h100 w100 flex column'>
        <NavBar />
        <div className='flex column a-center grow black'>{props.children}</div>
        <div>FOOTER</div>
    </div>
  )
}
