import React ,{useState}from 'react'

const Item = (props) => {


const[title, setTiltle]=useState(props.title);




    const changeIt=()=>{
      setTiltle('Uptades');
     
    }
  return (
  <>
      <div>{title}</div>
      <button onClick={changeIt}>CHANGE</button>
      </>
  )
}

export default Item