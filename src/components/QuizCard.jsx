import React,{useState,useEffect} from 'react'
import Date from './Date'
import Option from './Option'
import OptionSelector from './OptionSelector'
import NavButton from './NavButton'
export default function QuizCard() {
    const [date,setDate]=useState("");
    const [quizArr,setQuizArr]=useState([]);

    //add a question
    const onAdd=()=>{
        setQuizArr(prev=>{
            const updatedQuizArr=[...prev,{}];
            return updatedQuizArr;
        })
    }

    //remove last question
    const onRemove=()=>{
        setQuizArr((prev)=>{
            prev.pop();
            return [...prev];
        })
    }
    
    useEffect(()=>{
        console.log(quizArr);
    },[quizArr])
  return (
    <main className='quiz-card full flex items-center'>
        <Date value={date} onChange={(e)=>{
            setDate(e.target.value);
        }}></Date>
        <p className='question-heading'>Ouestion {quizArr.length+1}</p>
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
                <NavButton onClick={onAdd} text={"Add Question"}></NavButton>
                <NavButton onClick={onRemove} text={"Remove Last Question"}></NavButton>
             </div>
            <div className='round-border full-width submit-button action-button flex justify-center'>Submit</div>
        </section>
    </main>
  )
}
