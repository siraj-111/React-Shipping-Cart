import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router'
import Products from './data'



export const Product = () => {

  const cartItem=JSON.parse(localStorage.getItem('cart') || '[]')

  const history=useHistory()

  const [cart,setCart]=useState(cartItem)
  


  useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(cart));
  },[cart]);




   const AddToCart=(item)=>{

     const some=cart.some(i=>i.id===parseInt(item.id))
     if(some){
         const exist=cart.find(ob=>ob.id===item.id)
         
         setCart(cart.map(x=>x.id===item.id?{...exist,quantity:exist.quantity+1}:x))
         console.log(cart);
     }
     else{
      setCart([...cart,{...item}])
      console.log(cart);
      window.location.reload()
     }

   }





  const quickview=(id)=>{
      history.push('/detail',{id})
  }



  return (
    <div className="row">
      <div className="col-1"></div>
      {
        Products.map(item=>
          <div key={item.id} className="col-3" >
           <img src={item.Image} alt={item.name} className="img img-fluid" style={{height:'30vh'}}/>
           <h5>{item.name}</h5>
           <small > <strong>Price :</strong> {item.price}</small>
           <br/>
           <div className="mt-3">

           <button className="btn btn-warning" onClick={()=>quickview(item.id)}>View</button><button onClick={()=>AddToCart(item)} className="btn btn-success" style={{marginLeft:'1vw'}}>Add TO Cart</button>
           </div>
           
          </div>
          )
      }
    </div>
  )
}
