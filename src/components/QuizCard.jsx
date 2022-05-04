import React from 'react'
import Date from './Date'
export default function QuizCard() {
  return (
    <main className='quiz-card full flex items-center'>
        <Date></Date>
        <h1 className='question-heading'>Ouestion 1</h1>
        <section className='question-section flex items-center'>
            <input className='bg-light round-border full-width text-white' placeholder='Question' type="text" name="question" id="question" />
        </section>
    </main>
  )
}
