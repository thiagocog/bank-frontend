// SERVICES AUTH.SERVICE

import http from '../config/http';


const authService = (data) => http.post('/auth', data); 


const registerUserService = (data) => http.post('/client', data);

// const getBankAllUsers = () => http.get('/users')
const getBankAllUsers = () => (
    [
        {
            name: 'Maria Madalena', 
            email: 'mm@email.com', 
            type: '1'
        },
        {
            name: 'Bruno Silveira', 
            email: 'bs@email.com', 
            type: '2'
        },
        {
            name: 'Diego Alcântara', 
            email: 'da@email.com', 
            type: '2'
        },
        {
            name: 'Vanessa Coimbra', 
            email: 'vc@email.com', 
            type: '2'
        },
    ]
)


export {
    authService,
    registerUserService,
    getBankAllUsers
}
