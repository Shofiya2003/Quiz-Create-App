import React,{useState,useEffect} from 'react'
import Date from './Date'
import Option from './Option'
import OptionSelector from './OptionSelector'
import NavButton from './NavButton'
export default function QuizCard() {
    const [date,setDate]=useState("");
    const [quizArr,setQuizArr]=useState([]);
    const [options,setOptions]=useState([{},{},{},{}]);
    const [currentQuestion,setCurrentQuestion]=useState({hint:"",answer:"",question:""});

    //add a question
    const onAdd=()=>{
        setCurrentQuestion({hint:"",answer:"",question:""})
        setOptions([{},{},{},{}]);
    }

    //remove last question
    const onRemove=()=>{
        setQuizArr((prev)=>{
            prev.pop();
            return [...prev];
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
        setOptions((prev)=>{
            return [...prev.slice(0,idx),newOption,...prev.slice(idx+1)]
        })
       
    }

    //update the current question
    const updateCurrentQuestionDetails=(e)=>{
        const property=e.target.name;
        const value=e.target.value;
        setCurrentQuestion(prev=>{
            return {...prev,[property]:value}
        })
    }

    //addCurrentQuestionToQuizArray
    const addQuestionToArray=()=>{
        if(validateCurrentQuestion(currentQuestion)){
            const newQuestion=({
                ...currentQuestion,
                options:options,
                answered_by:"0",
            })
            setQuizArr(prev=>{
                return [...prev,newQuestion]
            });
            onAdd();
        }
    }

    const validateCurrentQuestion=(currentQuestion)=>{
        if(!currentQuestion.answer && (currentQuestion.answer==="")){
            return false;
        }
        else if(!currentQuestion.answer && (currentQuestion.answer==="")){
            return false;
        }
        return true;
    }


    useEffect(()=>{
        console.log(currentQuestion);
        console.log(quizArr)
    },[currentQuestion,quizArr])
  return (
    <main className='quiz-card full flex items-center'>
        <Date value={date} onChange={(e)=>{
            setDate(e.target.value);
        }}></Date>
        <p className='question-heading'>Ouestion {quizArr.length+1}</p>
        <section className='question-section flex items-center'>
            <input className='bg-light round-border full-width text-white' value={currentQuestion.question} placeholder='Question' type="text" name="question" onChange={(e)=>{
                updateCurrentQuestionDetails(e);
            }} id="question" />
            <div className='full-width'>
                <div className='options-subsection flex'>
                    <Option id={1} value={options[0].value || ""} text={"First"} onChange={updateOptions}></Option>
                    <Option id={2} text={"Second"} value={options[1].value || ""}  onChange={updateOptions}></Option>
                </div>
                <div className='options-subsection flex'>
                    <Option id={3} text={"Third"} value={options[2].value || ""} onChange={updateOptions}></Option>
                    <Option id={4} text={"Fourth"} value={options[3].value || ""} onChange={updateOptions}></Option>
                </div>
            </div>
            <OptionSelector options={options} onChange={updateCurrentQuestionDetails}></OptionSelector>
            <textarea className='bg-light round-border full-width' value={currentQuestion.hint} name='hint' placeholder='Hint' onChange={(e)=>{
                updateCurrentQuestionDetails(e);
            }}></textarea>
            <input className='bg-light round-border full-width file' type="file" />
        </section>
        <section className='controls'>
            <div className='round-border full-width delete-button action-button flex justify-center'>Delete</div>
             <div className='flex full-width' style={{"gap":"52px"}}>
                <NavButton onClick={addQuestionToArray} text={"Add Question"}></NavButton>
                <NavButton onClick={onRemove} text={"Remove Last Question"}></NavButton>
             </div>
            <div className='round-border full-width submit-button action-button flex justify-center'>Submit</div>
        </section>
    </main>
  )
}
