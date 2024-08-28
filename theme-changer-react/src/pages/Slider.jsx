import React, { useEffect, useState } from 'react'
const Slider = () => {
  let [sliders,setSliders]=useState([])
  let getSliders =async()=>{
    try{
      let res = await fetch(`${import.meta.env.VITE_URL}/sliders`)
      let data=await res.json()
      let filter = data.filter(item=>item.isActive)
      setSliders(filter)  }
    catch(err){ toast.error(err.message)  }}

  useEffect(()=>{ getSliders() },[])
  return (
    <>
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      {sliders.map((s,i)=>
        <div class={`carousel-item ${i==0 && 'active'}`} key={s.id} data-bs-interval={2000}>
        <img src={s.image} class="d-block w-100"  height={300} alt={s.title}/>
        <div class="carousel-caption d-none d-md-block">
        <h5>{s.title}</h5>
        <p>{s.desc}</p>
      </div>
        </div>
      )}
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
    </div>
    </>
  )
}

export default Slider
