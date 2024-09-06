import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { Row } from 'react-bootstrap'
import ReactPaginate from 'react-paginate'
import Loader from './Loader'

const ProductList = ({products}) => { //7
  let itemsPerPage = 4
  let [pageCount,setPageCount]=useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const [currentItems,setCurrentItems]=useState([])

  useEffect(()=>{ 
    const endOffset = itemOffset + itemsPerPage;  //0+5 = 5 ,5+5 =10
    setCurrentItems(products.slice(itemOffset, endOffset)) //0 to 5(4index)  ,5to10(9index)
  setPageCount(Math.ceil(products.length / itemsPerPage)) //7/5 => 1.5 = 2  
  },[itemOffset])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;  //1*5 % 7 => 5
    setItemOffset(newOffset);  //5
  };
  return (
    <div className='container mt-5'>
        {products.length ==0 && <h1>No product found</h1>}
          <Row className='mb-4'>
                {currentItems.map((product)=><ProductCard key={product.id} product={product}/>)}
        </Row>
        <ReactPaginate breakLabel="..."  nextLabel="next >" onPageChange={handlePageClick}
        pageRangeDisplayed={5} pageCount={pageCount}previousLabel="< previous"   renderOnZeroPageCount={null} 
        containerClassName="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeLinkClassName="page-link active"
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
        />
    </div>
  )
}

export default ProductList
