import React from 'react'
import { useContext } from 'react'
import {listContext} from "../App"

function DisplayList() {
    
   const {taskList,handleDelete} = useContext(listContext)
   
   
   
    console.log(taskList)
  return (
   <>
   <div className="displayWrapper">
    {taskList.map(item=>{
        let {title, id} = item;
        return(
            <div className='taskWrapper'>
                <input type='checkbox' />
                <span>{title}</span>
                <span onClick={()=>handleDelete(id)}>delete</span>
            </div>

        )
    })}

   </div>
   </>
  )
}

export default DisplayList