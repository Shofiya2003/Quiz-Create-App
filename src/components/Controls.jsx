import React from 'react'
import NavButton from './NavButton';
export default function Controls(props) {
    const {onAdd,onRemove,submit,deleteQuestion}=props;
  return (
    <section className='controls'>
        <div className='round-border full-width delete-button action-button flex justify-center' onClick={deleteQuestion}>Delete</div>
        <div className='flex full-width' style={{"gap":"52px"}}>
            <NavButton onClick={onAdd} text={"Add Question"}></NavButton>
            <NavButton onClick={onRemove} text={"Remove Last Question"}></NavButton>
        </div>
        <div className='round-border full-width submit-button action-button flex justify-center' onClick={submit}>Submit</div>
    </section>
  )
}
