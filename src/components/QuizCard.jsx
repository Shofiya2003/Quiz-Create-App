import React,{useState,useEffect} from 'react'
import Date from './Date'
import OptionsSection from './OptionsSection'
import OptionSelector from './OptionSelector'
import NavButton from './NavButton'
import axios from 'axios'
import { validateCurrentQuestion,errToast } from './util'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function QuizCard() {
    const [date,setDate]=useState("");
    const [quizArr,setQuizArr]=useState([{hint:"",answer:"",question:"",answered_by:"0",options:[{},{},{},{}]}]);

    //add a question
    const onAdd=()=>{
        if(validateCurrentQuestion(quizArr[quizArr.length-1])){

            setQuizArr(prev=>{
                return [...prev,{hint:"",answer:"",question:"",answered_by:"0",options:[{},{},{},{}]}];
            });
        }
    }

    //delete a question
    const deleteQuestion=()=>{
        if(quizArr.length===1){
            setQuizArr([{hint:"",answer:"",question:"",answered_by:"0",options:[{},{},{},{}]}])
            return;
        }
        setQuizArr((prev)=>{
            prev.pop();
            return [...prev];
        })
    
    }

    //remove last question
    const onRemove=()=>{
        if(quizArr.length===1){
            return;
        }
        setQuizArr((prev)=>{
            return [...prev.splice(0,prev.length-2),...prev.splice(prev.length-1)];
        })
    }

    //update options
    const updateOptions=(e)=>{
        const {id,value}=e.target;
        console.log(id);
        const newOption={
            value,
            opted_by:"0"
        }
        console.log(newOption);
        const idx=id-1;
        setQuizArr((prev)=>{
            const currentQuestion=prev[prev.length-1];
            const options=currentQuestion.options;
            currentQuestion.options=[...options.slice(0,idx),newOption,...options.slice(idx+1)];
            prev.pop();
            return [...prev,currentQuestion]
        });
        
    }

    //update the current question
    const updateCurrentQuestionDetails=(e)=>{
        const property=e.target.name;
        const value=e.target.value;
        setQuizArr(prev=>{
            const currentQuestion=prev[prev.length-1];
            currentQuestion[property]=value;
            prev.pop();
            return [...prev,currentQuestion];
        })
    }

  
    //submit
    const submit =()=>{
        if(date===""){
            errToast("Date cannot be empty");
        }
        if(validateCurrentQuestion(quizArr[quizArr.length-1])){
            
            axios.post('http://localhost:8000/api/v1/quiz',{
                date,
                quiz:quizArr
            }).then(msg=>{
                console.log(msg);
            }).catch(err=>{
                console.log(err.response);
            })
            setQuizArr([{hint:"",answer:"",question:"",answered_by:"0",options:[{},{},{},{}]}]);
            setDate("");
        }
    }


    useEffect(()=>{
        
        console.log(quizArr)
    },[quizArr])
  return (
    <main className='quiz-card full flex items-center'>
        <Date value={date} onChange={(e)=>{
            setDate(e.target.value);
        }}></Date>
        <p className='question-heading'>Ouestion {quizArr.length}</p>
        <section className='question-section flex items-center'>
            <input className='bg-light round-border full-width text-white' value={quizArr[quizArr.length-1].question} placeholder='Question' type="text" name="question" onChange={(e)=>{
                updateCurrentQuestionDetails(e);
            }} id="question" />
            <OptionsSection updateOptions={updateOptions} quizArr={quizArr}></OptionsSection>
            <OptionSelector options={quizArr[quizArr.length-1].options} value={quizArr[quizArr.length-1].answer} onChange={updateCurrentQuestionDetails}></OptionSelector>
            <textarea className='bg-light round-border full-width' value={quizArr[quizArr.length-1].hint} name='hint' placeholder='Hint' onChange={(e)=>{
                updateCurrentQuestionDetails(e);
            }}></textarea>
            <input className='bg-light round-border full-width file' type="file" />
        </section>
        <section className='controls'>
            <div className='round-border full-width delete-button action-button flex justify-center' onClick={deleteQuestion}>Delete</div>
             <div className='flex full-width' style={{"gap":"52px"}}>
                <NavButton onClick={onAdd} text={"Add Question"}></NavButton>
                <NavButton onClick={onRemove} text={"Remove Last Question"}></NavButton>
             </div>
            <div className='round-border full-width submit-button action-button flex justify-center' onClick={submit}>Submit</div>
        </section>
        <ToastContainer></ToastContainer>
    </main>
  )
}
