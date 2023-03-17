import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import BurgerBag from '../../assets/burger-bag.svg'
import Trash from '../../assets/trash.svg'

import { Container, Image, H1, ContainerItens, Order, GetBack } from './styles'

function Ordered() {
  const [ordered, setOrdered] = useState([])
  const navigate = useNavigate()
  

  useEffect(() => {
    async function fetchOrdered() {
      const { data: newOrdered} = await axios.get("http://localhost:3001/order");
      
      setOrdered(newOrdered)
    }
    fetchOrdered()
    
    
  }, [])

  async function deleteOrder(orderId) {
    await axios.delete(`http://localhost:3001/order/${orderId}`)
    
    const newOrder = ordered.filter(order => order.id !== orderId)

    setOrdered(newOrder)
  }

  function goBackPage() {
    navigate("/")
  }

  return (
    <Container>
      <Image alt="logo-bag-burger" src={BurgerBag} />
      <ContainerItens>
        <H1>Ordered</H1>
                <ul>
          {ordered.map((order) => (
            <Order key={order.id}>
              <div>
                <p>{order.order}</p>
                <p><b>{order.clientName}</b></p>
              </div>
              <button onClick={() => deleteOrder(order.id)}>
                <img alt="trash-bin" src={Trash} />
              </button>
            </Order>))}
        </ul>
        <GetBack onClick={goBackPage}>Back</GetBack>
      </ContainerItens>
    </Container>

  )
}

export default Ordered
