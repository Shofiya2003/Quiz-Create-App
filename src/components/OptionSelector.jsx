import React from 'react'

export default function OptionSelector(props) {
  const {options,onChange,value}=props;
  return (
    <select className='text-white bg-light round-border full-width' defaultValue={"Select Answer"} value={value} name="answer" onChange={(e)=>{
      onChange(e);
    }} id="">
      <option value="Select Answer">Select Answer</option>
        {options.map((option,idx)=>{
          if(option.value){
            return  <option key={idx} id={idx} value={idx+1}>{option.value}</option>
          }
          return null;
        })}
    </select>
  )
}
