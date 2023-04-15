const express = require('express')
const uuid = require('uuid')

const port = 3000
const app = express()
app.use(express.json())
const orders =[]
const checkOrder = (request,response,next)=>{
    const {id}=request.params
    const index =orders.findIndex(user=>user.id===id)
    request.orderIndex=index
    request.orderId=id
    if (index<0) {
        return response.status(404).json({error:"order not found"})
    }
    next()
}

app.post('/order',(resquest,response)=>{
const {order,clientName,price,status}= resquest.body
const newOrder={id:uuid.v4(),order,clientName,price,status}
orders.push(newOrder)
return response.json(newOrder)
})

app.get('/order',(request,response)=>{
      return response.json(orders)
})

app.put('/order/:id',checkOrder,(request,response)=>{
    const {order,clientName,price,status}=request.body
    const index = request.orderIndex
    const id = request.orderId
    const orderUpdate = {id,order,clientName,price,status}
    orders[index] =orderUpdate
  return response.json(orders)
})
app.delete('/order/:id',checkOrder,(request,response)=>{
    const index = request.orderIndex
    orders.splice(index,1)
   return response.status(204).json()
})
app.get('/order/:id',checkOrder,(request,response)=>{
    const id = request.orderId
    const order = orders.find((item) => item.id === id)
   return  response.send(order)

})
app.patch('/order/:id',checkOrder,(request,response)=>{
    const {order,clientName,price,status}=request.body
    const index = request.orderIndex
    const id = request.orderId
    const orderUpdate = {id,order,clientName,price,status:"pronto"}
    orders[index] =orderUpdate
  return response.json(orderUpdate)
})
 
app.listen(port,()=>{
    console.log (`server runing on port ${port}`)
})

