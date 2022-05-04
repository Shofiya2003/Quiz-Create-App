import React from 'react'

export default function NavButton(props) {
  const {onClick,text}=props;
  return (
    <div className='bg-light round-border flex justify-center nav-button' onClick={onClick}>
        {text}
    </div>
  )
}
