import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { useMyContext } from './CartContext'

const ProductCard = ({product}) => {
  const data = useMyContext()
  let handleCart=(product)=>{
    data.addtocart(product)
  }
  return (
    <Col xs={3}>
        <Card>
            <Card.Img variant="top" height={180} src={product.images[0]}/>
            <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.category} </Card.Text>
            <Card.Text>${product.price} </Card.Text>
            <Card.Text>Available : {product.stock} </Card.Text>
            <Button variant="danger" onClick={()=>handleCart(product)}>Add to Cart</Button>
        </Card.Body>
        </Card>
    </Col>
  )
}

export default ProductCard
