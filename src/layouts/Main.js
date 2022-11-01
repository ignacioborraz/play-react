function Main(props) {
    return (
        <div className="w100 h100 flex column a-center">
            <div className='w100 gray flex column j-center a-center'>ESTA ES LA BARRA DE NAVEGACION</div>
            {/* <div className='w100 black flex column a-center grow'>ACA VA EL CONTENIDO</div> */}
            <div className='w100 black flex column a-center grow'>{ props.children }</div>
            <div className='w100 gray flex column j-center a-center'>ESTE ES EL FOOTER DE MI APP</div>
        </div>
    )
}

export default Main