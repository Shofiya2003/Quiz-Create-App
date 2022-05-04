import React from 'react'

export default function Option(props) {
  const {id,onChange,text}=props;
  return (
    <input type="text" id={id} onChange={(e)=>{
      onChange(e);
    }} className='option bg-light round-border' placeholder={`${text} option`}/>
  )
}
