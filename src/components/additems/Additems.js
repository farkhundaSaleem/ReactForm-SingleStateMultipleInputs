import React from 'react'

const itemName = ({onAdd}) => {
let itemName="";

const onSubmitHandler=(event)=>{
event.preventDefault();
onAdd(itemName)
}
const onChangeInputHandler=(event)=>{
itemName = event.target.value;

}

  return (
    <form onSubmit={onSubmitHandler}>
        <div>
            <label htmlFor="my-input">
ITEM NAME : 
            </label>
            <input id='my-input' type="text" onChange={onChangeInputHandler} />
        </div>
        <div>
            <button type="submit">Add</button>
        </div>
    </form>
  )
}

export default itemName