import React , {Component} from 'react'
import './burger.css'  ; 

export default class Burger extends Component {
state = {
  lettuce : 0 , 
  tomato : 0, 
  cheese : 0, 
  meat : 0 , 
}




totalPrice = ()=>{ 
    console.log(this.state.lettuce) ; 

 let Price = this.state.lettuce + this.state.tomato + this.state.cheese + this.state.meat ; 
      this.setPrice({[Price]:Price})
}

handleChange = (action,ingredient)=>{
    let {
      lettuce, 
      tomato ,
      cheese , 
      meat
    } = this.state 

    let stateValue  ; 

    switch(ingredient){
      case "lettuce" :{
        stateValue = lettuce
          break ; 
      } 
      case "tomato" :{
        stateValue = tomato
          break ; 
      }
      case "cheese" :{
        stateValue = cheese
          break ; 
      }
      case "meat" :{
        stateValue = meat
          break ; 
      }
      default : break ; 
    }

     if(action=== "add"){
      stateValue  = stateValue + 1
     } else {
      stateValue  = stateValue - 1
     }
     this.setState({
      [ingredient] : stateValue >= 0 ? stateValue : 0
     })

     this.totalPrice(); 
}

burgerContent = () =>{
  let {
    lettuce, 
    tomato ,
    cheese , 
    meat
  } = this.state  
 
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
   return burger
}

// clearAll = ()=>{
//   this.setState.lettuce(0) 
//   this.setState.tomato(0)
//   this.setState.cheese(0)
//   this.setState.meat(0)
   
// }

  render() {
    return(
    <> 
    {/* <div className = "image"> */}
    <div className = "logo">
      <img className = "img" src="https://th.bing.com/th/id/OIP.M93xWD4Gvp4xQRZXa8ceCAHaHa?pid=ImgDet&rs=1"/>
    </div>
    
    {/* </div> */}
    
    <div className = "container">
    <div className = "img-div"><img className = "img"src = "https://i.ebayimg.com/images/g/lEAAAOSwNSxVEtUK/s-l640.jpg"/>
    </div>
<div className = "box">
  <div className="bread-top">
    <div className="seeds"></div>
    <div className="seeds2"></div>
 </div>
     {this.burgerContent()}
  <div className="bread-bottom"></div>
</div>
  <div className = "btn-block">
    <div className = "btn-slide">
    <p>Lettuce</p>
    <div className = "btn">
       <button onClick = {()=>this.handleChange("add" , "lettuce")} className = "ingrbtn">Add</button>
        <span className = "ingr-count">{this.state.lettuce}</span>
       <button onClick = {()=>this.handleChange("remove" , "lettuce")} className = "ingrbtn">Remove</button>
     </div>
     </div>
    
     <div className = "btn-slide">
     <p>Tomato</p>
    <div className = "btn">
       <button onClick = {()=>this.handleChange("add" , "tomato")} className = "ingrbtn">Add</button>
       <span className = "ingr-count">{this.state.tomato}</span>
       <button onClick = {()=>this.handleChange("remove" , "tomato")} className = "ingrbtn">Remove</button>
     </div>
     </div>
     <div className = "btn-slide">
     <p>Cheese</p>
    <div className = "btn">
       <button onClick = {()=>this.handleChange("add" , "cheese")} className = "ingrbtn">Add</button>
       <span className = "ingr-count">{this.state.cheese}</span>
       <button onClick = {()=>this.handleChange("remove" , "cheese")} className = "ingrbtn">Remove</button>
     </div>
     </div>
     <div className = "btn-slide">
     <p>Meat</p>
    <div className = "btn">
       <button onClick = {()=>this.handleChange("add" , "meat")} className = "ingrbtn">Add</button>
       <span className = "ingr-count">{this.state.meat}</span>
       <button onClick = {()=>this.handleChange("remove" , "meat")} className = "ingrbtn">Remove</button>
     </div>
     </div>
     {/* <button onClick={this.clearAll}>Clear All</button> */}
  </div>

  <div className = "show-details">
    <div className = "details-box">
       <p>Quantity</p>
    </div>
    <div className = "details-box">
    <p>Total Price</p>
      {/* <p>{this.price}</p> */}
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
}


