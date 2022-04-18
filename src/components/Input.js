import React, { useState } from "react";

function Input (props){

   const [name, setName] = useState("");

   function handleChange(event) {
      setName(event.target.value);
      props.onChange(name)
   }

   return (
      <div className="input-zone">
         <h1>Zona Input</h1>
         <input 
         type="text"
         name="name"
         onChange={handleChange}
         value={name}/>

         <h2>stesso livello del componente input: {name}</h2>
      </div>
   )
}

export default Input