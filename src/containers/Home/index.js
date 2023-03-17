import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import BurgerLogo from '../../assets/burger-logo.svg'

import { Container, Image, H1, Label, ContainerItens, Input, Button} from './styles'

function App() {
  const [ordered, setOrdered] = useState([])
  const order = useRef()
  const clientName = useRef()
  const navigate = useNavigate()

  async function addNewOrder() {

   const { data: newOrder} = await axios.post("http://localhost:3001/order", { order: order.current.value, 
   clientName: clientName.current.value })

   setOrdered([...ordered, newOrder])

   navigate("/order")

  }

  return (
    <Container>
      <Image alt="logo-code-burger" src={BurgerLogo} />
      <ContainerItens>
        <H1>Order now!</H1>
        <Label>Order</Label>
        <Input ref={order} placeholder='Your Order' />
        <Label>Client's Name</Label>
        <Input ref={clientName} placeholder='Your Name' />
        <Button onClick={addNewOrder} >New Order</Button>
      </ContainerItens>
    </Container>

  )
}

export default App
