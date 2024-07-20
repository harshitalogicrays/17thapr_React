import React from 'react'
import products from '../../assets/products.js'
const ListRendering = () => {
    // let names=["aaa","bbb","ccc","ddd","eee","fff","ggg","aaa"]
    // console.log(products)
  return (
  <>
    <h1>List Rendering Demo</h1><hr/>
    {/* {names.map((n,i)=><h1 key={i}>{n}</h1>)} */}
    {/* {products.map((product)=><p key={product.id}>{JSON.stringify(product)}</p>)} */}

    <div class="table-responsive" >
        <table class="table table-bordered table-striped table-hover" >
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">NAme</th>
                    <th scope="col">Category</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>stock</th>
                </tr>
            </thead>
            <tbody>
                {products.length==0 &&  <tr><td colSpan={6}>No Product Found</td></tr>}
                {/* {products.map((product)=>
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.category}</td>
                        <td><img src={product.image} height={50} width={50}/></td>
                        <td>{product.price}</td>
                        <td>{product.stock}</td>
                    </tr>
                )} */}
                 {/* {products.map((product)=>{
                  return <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.category}</td>
                        <td><img src={product.image} height={50} width={50}/></td>
                        <td>{product.price}</td>
                        <td>{product.stock}</td>
                    </tr>
                 }
                )} */}

            {products.map((product)=>{
                    let {id,name,category,image,price,stock}=product
                  return <tr key={id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{category}</td>
                        <td><img src={image} height={50} width={50}/></td>
                        <td>{price}</td>
                        <td>{stock}</td>
                    </tr>
                 }
                )}
            </tbody>
        </table>
    </div>
    
  </>
  )
}

export default ListRendering
