const express = require('express');
const {uuid , isUuid} = require('uuidv4');

const app = express()

app.use(express.json())

/**
 * Métodos HTTP: 
 * 
 * GET: Buscar informação
 * POST: criar uma informação
 * PUT/PATCH: Alterar uma informação 
 * DELETE: deletar uma informação
 * 
 * Tipos de parâmetros:
 * 
 * Query Params: Filtros e paginação
 * Route Params: identificar recursos (Atualizar/Deletar)
 * Request Body: Conteúdo na hora de criar ou editar recurso (JSON)
 * 
 * Middleware:
 * 
 * Interceptador de requisições que podem interromper totalmente a requisição ou alterar dados da requisição
 * */    

const projects = []

function logRequests(request , response  , next){
    const {method , url} = request

    const logLabel = `[${method.toUpperCase()}] ${url}`


    console.time(logLabel)
    next()
    console.timeEnd(logLabel)

}

function validateProjectId(request , response , next){
    const {id} = request.params

    if(!isUuid(id)){
        return response.status(400).json({error: 'Invalid project ID'})
    }

    return next();

}

app.use(logRequests)
app.use('/projects/:id' , validateProjectId)

app.get('/projects' , (request , response) => {
    const {title , owner} = request.query

    const results = title && owner ? 
    projects.filter(project => project.title.includes(title) && project.owner.includes(owner)) : projects

    return response.json(results)
})
app.post('/projects' , (request , response) => {
    const {title , owner} = request.body;

    const project = { id: uuid(), title , owner};

    projects.push(project)

    return response.json(project)
})
app.put('/projects/:id' , (request , response) => {
    const {title , owner} = request.body;

    const {id} = request.params

    const projectIndex = projects.findIndex(project => project.id === id)

    if(projectIndex < 0){
        return response.status(400).json({error: 'project not found'})
    }

    const updateProject = {
        id, 
        title,
        owner
    }

    projects[projectIndex] = updateProject

    return response.json(updateProject)
})
app.delete('/projects/:id' , (request , response) => {
    const {id} = request.params

    const projectIndex = projects.findIndex(project => project.id === id)

    if(projectIndex < 0){
        return response.status(400).json({error: 'project not found'})
    }

    projects.splice(projectIndex , 1)

    return response.status(204).send()
})

app.listen(3333 , ()=> {
    console.log('✅  Server listening of port 3333')
})