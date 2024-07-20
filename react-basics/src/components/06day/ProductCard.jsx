import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'

const ProductCard = ({product}) => {
  return (
    <Col xs={3}>
        <Card>
            <Card.Img variant="top" height={180} src={product.image}/>
            <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.category} </Card.Text>
            <Card.Text>${product.price} </Card.Text>
            <Card.Text>Available : {product.stock} </Card.Text>
            <Button variant="danger">Add to Cart</Button>
        </Card.Body>
        </Card>
    </Col>
  )
}

export default ProductCard
