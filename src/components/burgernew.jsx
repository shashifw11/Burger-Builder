import React from 'react'
import {useState , useEffect} from "react" ; 
import "./burger.css" ; 

const Burgernew = () => { 

    const [lettuce , setLettuce] = useState(0) ; 
    const [cheese , setCheese] = useState(0) ; 
    const [tomato , setTomato] = useState(0) ;
    const [meat , setMeat] = useState(0) ; 
    const [price , setPrice] = useState(0) ; 
    const [quantity , setQuintity] = useState(0) ; 
    const [burgercount , setBurgerCount] = useState(0) ; 

       console.log(burgercount) ; 

      const cost = {
        lettuce : 3 ,
        cheese  : 2,
        tomato  : 1 ,
        meat  : 4 , 
        bun   : 2
      }




       const changeBurgerCount = (e)=>{
            if(burgercount>=0 ){ 
                setBurgerCount((prev)=>prev + e)
            }else if(burgercount<=0){
                setBurgerCount(0)
            }
       }

       const TotalCost = ()=>{
            const TotalPrice = (cost.lettuce*lettuce 
                              + cost.cheese*cheese 
                              + cost.tomato*tomato 
                              + cost.meat*meat + cost.bun)*burgercount 

                 setPrice(TotalPrice)
       }

  const handleChange = (action , ingredient)=>{
        switch(ingredient){
            case "lettuce" : {
                 if(action === "add" ){ 
                     if(lettuce>=0){
                        setLettuce((prev)=> prev + 1)
                     }else{
                        setLettuce(0)
                     }
                } else if(action === "remove"){
                    if(lettuce>0){
                        setLettuce((prev)=> prev - 1)
                     }else{
                        setLettuce(0)
                     }
                 } 
                  break ; 
            }
            case "cheese" :{
                if(action === "add" ){ 
                    if(cheese>=0){
                       setCheese((prev)=> prev + 1)
                    }else{
                       setCheese(0)
                    }
                } else if(action === "remove"){
                   if(cheese>0){
                       setCheese((prev)=> prev - 1)
                    }else{
                       setCheese(0)
                    }
                }
                break ; 
            }
            case "tomato" :{
                if(action === "add" ){ 
                    if(tomato>=0){
                       setTomato((prev)=> prev + 1)
                    }else{
                        setTomato(0)
                    }
            } else if(action === "remove"){
                   if(tomato>0){
                    setTomato((prev)=> prev - 1)
                    }else{
                        setTomato(0)
                    }
                }
                break ; 
            }
            case "meat" :{
                if(action === "add" ){ 
                    if(meat>=0){
                       setMeat((prev)=> prev + 1)
                    }else{
                        setMeat(0)
                    }
                   
                } else if(action === "remove"){
                   if(meat>0){
                    setMeat((prev)=> prev - 1)
                    }else{
                        setMeat(0)
                    }
                }
                break ; 
            }
             default : break ; 
        }
}   

useEffect(()=>{
    countItem()
    TotalCost() ; 
},[lettuce , cheese , meat , tomato , burgercount]) 

  const countItem = () =>{
     const totalCount = lettuce + cheese + meat + tomato
         setQuintity(totalCount); 

  }

   const getData = () => {
         let burger = [] ; 
    for(let i = 0 ; i< lettuce ; i++){
        burger.push( <div key = {burger.length} className="salad"> </div>)
      }
      for(let i = 0 ; i< tomato ; i++){
        burger.push( <div key = {burger.length} className="bacon"> </div>)
      }
      for(let i = 0 ; i< cheese ; i++){
        burger.push( <div key = {burger.length} className="cheese"> </div>)
      }
      for(let i = 0 ; i< meat ; i++){
        burger.push( <div key = {burger.length} className="meat"> </div>)
      } 
     return burger ; 

   }




  return (
    <>
       {/* <div className = "image"> */}
    {/* <div className = "logo">
      <img className = "img" src="https://th.bing.com/th/id/OIP.M93xWD4Gvp4xQRZXa8ceCAHaHa?pid=ImgDet&rs=1"/>
    </div> */}
    
    {/* </div> */}
    
    <div className = "container">
    <div className = "img-div"><img className = "img"src = "https://i.ebayimg.com/images/g/lEAAAOSwNSxVEtUK/s-l640.jpg"/>
    </div>
<div className = "box">
  <div className="bread-top">
    <div className="seeds"></div>
    <div className="seeds2"></div>
 </div>
     {getData()}
  <div className="bread-bottom"></div>
</div>
  <div className = "btn-block">
    <div className = "btn-slide">

    <p>Lettuce</p>
    <div className = "btn">

       <button onClick = {()=>handleChange("remove" , "lettuce")} className = "ingrbtn">Remove</button>
        <span className = "ingr-count">{lettuce}</span>
        <button onClick = {()=>handleChange("add" , "lettuce")} className = "ingrbtn">Add</button>
     </div>
     </div>
    
     <div className = "btn-slide">
     <p>Tomato</p>
    <div className = "btn">
       <button onClick = {()=>handleChange("remove" , "tomato")} className = "ingrbtn">Remove</button>
        <span className = "ingr-count">{tomato}</span>
       <button onClick = {()=>handleChange("add" , "tomato")} className = "ingrbtn">Add</button>
     </div>
     </div>
     <div className = "btn-slide">
     <p>Cheese</p>
    <div className = "btn">
         <button onClick = {()=>handleChange("remove" , "cheese")} className = "ingrbtn">Remove</button>
          <span className = "ingr-count">{cheese}</span>
        <button onClick = {()=>handleChange("add" , "cheese")} className = "ingrbtn">Add</button>

     </div>
     </div>
     <div className = "btn-slide">
     <p>Meat</p>
    <div className = "btn">
       <button onClick = {()=>handleChange("remove" , "meat")} className = "ingrbtn">Remove</button>
       <span className = "ingr-count">{meat}</span>
       <button onClick = {()=>handleChange("add" , "meat")} className = "ingrbtn">Add</button>

     </div>
     </div>
     {/* <button onClick={this.clearAll}>Clear All</button> */}
  </div>

  <div className = "show-details">
    <div className = "details-box">
      <div className = "qan-box"> 
         <p>Slide Quantity</p>
         <p>{quantity}</p>
      </div>
      <button  className = "qan-box">
      <p >Burger Quantity</p>
        <div className = "click">
            <span onClick={()=>changeBurgerCount(-1)}>--</span>
            <span>Click</span>
            <span onClick={()=>changeBurgerCount(1)}>+</span>
    </div> 
         <p>{burgercount}</p>
      </button>
      
    </div>
    <div className = "details-box">
       <div className = "price-box">
        <p>Total Price</p>
        <p>{price} ₹</p>
      </div>
    </div>
    <div className = "details-box">
    <p>Order History</p>
      <p></p>
    </div>
  </div>
  </div>
    </>
  )
}

export default Burgernew
