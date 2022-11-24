let apiUrl = 'https://mh-mentores.up.railway.app/api/'

if (process.env.NODE_ENV==='production') {
    apiUrl = process.env.REACT_APP_URL
}

export default apiUrl