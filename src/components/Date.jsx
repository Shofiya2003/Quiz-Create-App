import React from 'react'

export default function Date(props) {
  const {onChange,value}=props;
  return (
    <div>
        <input value={value} onChange={onChange} className='date bg-light round-border text-white' type="date" name="date" id="date" />
    </div>
  )
}
