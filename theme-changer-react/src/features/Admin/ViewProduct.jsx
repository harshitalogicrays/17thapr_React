import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
const ViewProduct = () => {
    return (
   <>
    <h1>View Product</h1>
    <Table>
      <thead><tr><th>Sr. No</th><th>Name</th>
      <th>Image</th>
      <th>Category</th>
      <th>brand</th>
      <th>stock</th>
      <th>price</th>
      <th>Action</th>
      </tr></thead>
      <tbody>
      </tbody>
    </Table>
   </>
  )
}

export default ViewProduct
