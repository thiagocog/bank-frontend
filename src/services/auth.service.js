import http from '../config/http';


const authService = (data) => http.post('/auth', data); 



// const authService = data => ({
//     data: {
//         token: '123', 
//         user: {
//             client: 'Thiago Gonçalves', 
//             email: 'thiago.cgoncalves@al.infnet.edu.br',
//             type: '2'
//         }
//     }
// })





const registerClientService = (data) => http.post('/client', data);


export {
    authService,
    registerClientService
}
