import {Request, Response} from 'express'
import createUser from './services/createUser'

export function helloWorld(request: Request, response: Response){
    const user = createUser({
        email: 'willianfernandes113@gmail.com',
        password: '12345678',
        techs: [
            'react' ,
             'node' , 
             'php' ,
             {title: 'javascript' , experience: 100},
             
            ]
    })

    
    return response.json({message: 'hello world '})
}