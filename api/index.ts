const express = require('express')
const rotas = require('./routes')
const port = 3000
const server = express()

rotas(server)

server.get('/', (req: any, res: any) => {
  return res.status(200).json({
     "mensagem": "API projeto NGCASH em execução"
  })
})

//ouvindo servidor
server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})