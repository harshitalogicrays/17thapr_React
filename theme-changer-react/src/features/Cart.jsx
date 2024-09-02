import React from 'react'
import { useMyContext } from './CartContext'
import { FaTrashAlt } from 'react-icons/fa'

const Cart = () => {
  const  data = useMyContext()
  return (
    <>
    <div className="container mt-5">
      <div className="row">
    <div class="col-lg-9">
    <div class="card border shadow-0">
      <div class="m-4">
        <h4 class="card-title mb-4">Your shopping cart</h4>
        {data.cartItems.length==0 && <h1>No Item in cart</h1>}
        {data.cartItems.map((item)=>
        <div class="row gy-3 mb-4">
          <div class="col-lg-5">
            <div class="me-lg-5">
              <div class="d-flex">
                <img src={item.images[0]} style={{width: '96px', height:'96px',border:'2px solid black'}} class='me-2' />
                <div class="">
                  <a href="#" class="nav-link">{item.name}</a>
                  <p class="text-muted">{item.category}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-sm-6 col-6 ">
            <div className='input-group' >
              <button type="button">-</button>
              <input className='form-control' value={item.qty} readOnly style={{textAlign:'center'}}></input>
              <button type="button">+</button>
            </div> </div>
            <div class="col-lg-2 col-sm-6 col-6 ">
              <text class="h6">${item.price * item.qty}</text> <br />
              <small class="text-muted text-nowrap"> ${item.price} / per item </small>
            </div>
         
          <div class="col-lg-2 col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2">
            <div class="float-md-end">
              <button class="btn btn-danger"><FaTrashAlt/></button>
            </div>
          </div>
        </div>
        )}
      </div>

      <div class="border-top pt-4 mx-4 mb-4">
        <p><i class="fas fa-truck text-muted fa-lg"></i> Free Delivery within 1-2 weeks</p>
      </div>
    </div>
  </div>
  <div class="col-lg-3">
    <div class="card mb-3 border shadow-0">
      <div class="card-body">
        <form>
          <div class="form-group">
            <label class="form-label">Have coupon?</label>
            <div class="input-group">
              <input type="text" class="form-control border" name="" placeholder="Coupon code" />
              <button class="btn btn-light border">Apply</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="card shadow-0 border">
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <p class="mb-2">Total price:</p>
          <p class="mb-2">$329.00</p>
        </div>
        <div class="d-flex justify-content-between">
          <p class="mb-2">Discount:</p>
          <p class="mb-2 text-success">-$60.00</p>
        </div>
        <div class="d-flex justify-content-between">
          <p class="mb-2">TAX:</p>
          <p class="mb-2">$14.00</p>
        </div>
        <hr />
        <div class="d-flex justify-content-between">
          <p class="mb-2">Total price:</p>
          <p class="mb-2 fw-bold">$283.00</p>
        </div>

        <div class="mt-3">
          <a href="#" class="btn btn-success w-100 shadow-0 mb-2"> Make Purchase </a>
          <a href="#" class="btn btn-light w-100 border mt-2"> Back to shop </a>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
</>
  )
}

export default Cart
