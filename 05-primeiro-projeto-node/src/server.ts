import express from 'express'

const app = express()

app.get('/' , (request, response) => {
    return response.json({message: 'Hello willian'});
})

app.listen(3333, ()=> {
	console.log('Server started on port 3333')
})
