export const fetchData = async() => {
    const res = await fetch(`${import.meta.env.VITE_URL}/products`) 
    if(!res.ok){
        throw new Response("Product not found",{status:404})
    }  
    return res.json()
}
