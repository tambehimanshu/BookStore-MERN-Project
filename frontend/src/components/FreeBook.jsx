import React from 'react'
import list from "../../public/list.json"

function FreeBook() {
    const filterData=list.filter((data)=>data.category==="free");
    console.log(filterData);
  return (
    <div>
        
    </div>
  )
}

export default FreeBook;