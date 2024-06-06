import './App.css';
import axios from 'axios'
import { useState,useEffect } from 'react';

function App() {
  var [products,setProducts]=useState([]);
  // var [productid,setProductid]=useState('')
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products/").then((res)=>{
      var temp=JSON.parse(JSON.stringify(res.data))
      temp = temp.map((p)=>{
        return {...p,status:false}
      })
      setProducts(res.data)
     })
  },[])
  console.log(products)
  function click(id){
    var temp=JSON.parse(JSON.stringify(products))
    temp = temp.map((p)=>{
      if(p.id===id){p.status=!p.status}
      return p
    })
    setProducts(temp)
  }
  useEffect(()=>{console.log(products)},[products])
    return <div>
      <h1 style={{backgroundColor:'orange',color:'slategrey'}}>Welcom To Edupoly</h1>
     {
      products?.map((prod)=>{
        return <li className='m-3 p-3 border border-1 bg-dark text-light a'>
            <div className='d-flex justify-content-between'>
              {prod.title}
              <i class={prod.status?"bi bi-dash-circle":"bi bi-plus-circle "} onClick={()=>{click(prod.id)}}></i>
              
              {
              prod.status && (
                <h2>
              Details<br />
              <img src={prod.image} className='w-25'/><br />
              <b>Category:{prod.category}</b><br />
              <h3>Price:{prod.price}</h3>
              </h2>
              )
            }

              </div>
            
            {/* <h2 style={prod.id===productid?{display:"block"}:{display:"none"}}> */}
          
            </li>
      })
     }
    </div>

  
}

export default App;
