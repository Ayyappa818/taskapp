import React from 'react'
import { useState } from 'react'

function Alphabet() {
  var [alphabet,setAlphabet]=useState([])
  function click(){
    setAlphabet()
  }
  return (
    <div>
    <h1>Alphabet</h1>
      {/* <br />
      <h1 onClick={(event)=>{click()}}>
        A 
        <p style={?{display:"block"}:{display:"none"}}>Apple</p>
      </h1>
      <h1 onClick={(event)=>{click()}}>
        B 
        <p style={?{display:"block"}:{display:"none"}}>Ball</p>
      </h1>
      <h1 onClick={(event)=>{click()}}>
        C 
        <p style={?{display:"block"}:{display:"none"}}>Cat</p>
      </h1> */}
    </div>
  )
}

export default Alphabet
