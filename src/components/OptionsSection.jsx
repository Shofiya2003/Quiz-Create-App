
import React from 'react'


import Option from './Option';
export default function OptionsSection({quizArr,updateOptions}) {
  return (
    <div className='full-width'>
        <div className='options-subsection flex'>
            <Option id={1} value={quizArr[quizArr.length-1].options[0].value || ""} text={"First"} onChange={updateOptions}></Option>
            <Option id={2} text={"Second"} value={quizArr[quizArr.length-1].options[1].value || ""}  onChange={updateOptions}></Option>
        </div>
        <div className='options-subsection flex'>
            <Option id={3} text={"Third"} value={quizArr[quizArr.length-1].options[2].value || ""} onChange={updateOptions}></Option>
            <Option id={4} text={"Fourth"} value={quizArr[quizArr.length-1].options[3].value || ""} onChange={updateOptions}></Option>
        </div>
    </div>
  )
}


