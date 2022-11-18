import alertReducer from './alerta'
import userReducer from './usuario'

const mainReducer = {
    alerta: alertReducer,
    usuario: userReducer
}

export default mainReducer