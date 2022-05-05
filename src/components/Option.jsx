import React from 'react'

export default function Option(props) {
  const {id,onChange,text,value}=props;
  return (
    <input type="text" id={id} value={value} onChange={(e)=>{
      onChange(e);
    }} className={`option bg-light round-border ${text}`} placeholder={`${text} option`}/>
  )
}
