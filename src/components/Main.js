import React, { useState } from "react";

import Input from './Input'

function Main ({getName}){

   const [name, setName] = useState("");

   const onChange = (name) =>{
      getName(name)
   }

   function getName (name){
      setName(name);
      //console.log("main", name);
   }

   return (
      <div className="card">
         <Input onChange={getName}/>
         <h3>livello card: {name}</h3>
      </div>
   )
}

export default Main