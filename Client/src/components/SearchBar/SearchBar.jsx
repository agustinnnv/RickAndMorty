import React, { useState } from "react";
import { handleNumber } from "../../Redux/Action/Actions";
import { useDispatch } from "react-redux";
export default function SearchBar({ onSearch }) {
const [id, setId] = useState('');
const dispatch = useDispatch();



const handleChange = (event) => {
    setId(event.target.value)  
}    
function submit(){
   onSearch(id);
   dispatch(handleNumber(1));
}
    return (
       <div>
          <input type='search' onChange={handleChange} value={id}
          />
          <button onClick={submit}>Filtrar</button>
       </div>
    );
 }