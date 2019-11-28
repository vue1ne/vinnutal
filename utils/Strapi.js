import Strapi from 'strapi-sdk-javascript/build/main'

const apiUrl = process.env.API_URL || 'http://localhost:1337'  
//const apiUrl = process.env.API_URL || 'https://sundlaug.herokuapp.com'  
const strapi = new Strapi(apiUrl)

export default strapi;  
export { apiUrl }