import React,{ useState,useEffect } from "react"

export const Cart = () => {
  const [totol,setTotal]=useState(0)
  const IteminStorage=JSON.parse(localStorage.getItem('cart') || '[]')

  const [cart,SetCart]=useState(IteminStorage)
  
  const price=cart.reduce((a,c)=>a+c.price*c.quantity,0)
  console.log(price,'Price');

  const count=JSON.parse(localStorage.getItem('cart')) || '[]'
  
  useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(cart))
  },[cart])




   const increment=(item)=>{
    const exist=cart.find(ob=>ob.id===item.id)
    SetCart(cart.map(x=>x.id===item.id?{...exist,quantity:exist.quantity+1}:x))
    console.log(cart);
   }




   const decrement=(item)=>{
    const exist=cart.find(ob=>ob.id===item.id)
      if(exist.quantity===0){
        SetCart(cart.filter(x=>x.id!==exist.id))
         window.location.reload()
      }
    else{
      SetCart(cart.map(x=>x.id===item.id?{...exist,quantity:exist.quantity-1}:x))
      console.log(cart);
    }
   }

   

  return (
    <div>
       {
         count.map(item=>
          <div key={item.id} className="row">
            <div className="col-2 mt-4"></div>
            <img src={item.Image} alt={item.name} style={{height:'9vw'}} className="col-2"/>
            <p className="col-1 mt-5" mt->{item.name}</p>
            <p className="col-1 mt-5">{item.price}</p>
            <div className="col-2 mt-5">
               <button onClick={()=>decrement(item)} className={item.quantity>1?'btn btn-warning':'btn btn-danger'}>
                 {item.quantity>1?'-':'Remove'}
                 </button><span className="mx-2">{item.quantity}
                 </span><button className="btn mx-2 btn-success" onClick={()=>increment(item)}>+</button>
            </div>
            <div className="col-1 mt-5" >{item.quantity*item.price}$</div>
          </div>
          )
       }
       <hr/>
       <div className='row'> <h3 className="col-3 offset-6">totol:{price}</h3> </div>
    </div>
  )
}
