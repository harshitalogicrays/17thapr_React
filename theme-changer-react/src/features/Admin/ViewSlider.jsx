import React, { useEffect } from 'react'
import {  Card, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const ViewSlider = () => {
   
    return (
      <>
        <Card className='mt-4'>
              <Card.Header>
                  <h1>View Slider 
                      <Link type="button" class="btn btn-primary float-end btn-lg "  
                      to='/admin/add/slider'>Add Slider</Link>
                  </h1>
              </Card.Header>
              <Card.Body>
              <Table>
          <thead>
          <tr>
          <th>Sr. No</th>
          <th>Title</th>
          <th>Image</th>
          <th>Desc</th>
          <th>status</th>
          <th>Action</th>
          </tr></thead>
        <tbody>
         
        </tbody>
      </Table>
              </Card.Body>
          </Card>
       
      </>
  
  )
}

export default ViewSlider
