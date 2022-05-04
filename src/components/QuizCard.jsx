import React from 'react'
import Date from './Date'
import Option from './Option'
import OptionSelector from './OptionSelector'
import NavButton from './NavButton'
export default function QuizCard() {
  return (
    <main className='quiz-card full flex items-center'>
        <Date></Date>
        <p className='question-heading'>Ouestion 1</p>
        <section className='question-section flex items-center'>
            <input className='bg-light round-border full-width text-white' placeholder='Question' type="text" name="question" id="question" />
            <div className='full-width'>
                <div className='options-subsection flex'>
                    <Option></Option>
                    <Option></Option>
                </div>
                <div className='options-subsection flex'>
                    <Option></Option>
                    <Option></Option>
                </div>
            </div>
            <OptionSelector></OptionSelector>
            <textarea className='bg-light round-border full-width' placeholder='Hint'></textarea>
            <input className='bg-light round-border full-width file' type="file" />
        </section>
        <section className='controls'>
            <div className='round-border full-width delete-button action-button flex justify-center'>Delete</div>
             <div className='flex full-width' style={{"gap":"52px"}}>
                <NavButton></NavButton>
                <NavButton></NavButton>
             </div>
            <div className='round-border full-width submit-button action-button flex justify-center'>Submit</div>
        </section>
    </main>
  )
}
