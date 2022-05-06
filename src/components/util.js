import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//validate all the fields
const validateCurrentQuestion=(currentQuestion)=>{
    if(!currentQuestion.question && (currentQuestion.question==="")){
        errToast("Question cannot be empty");
        return false;
    }
    const remainingOptions=currentQuestion.options.filter(option=>{
        return !option.value
    });
    if(remainingOptions.length!==0){
       errToast("Write all the options");
        return false;
    }

    if(checkDuplicateOptions(currentQuestion.options)){
        errToast("Options have to be unique");
        return false;
    }
   
    if(!currentQuestion.answer && (currentQuestion.answer==="" || currentQuestion.answer==="Select Answer")){
       errToast("Select Answer");
        return false;
    }
    return true;
}



//function to get the toast
const errToast=(msg)=>{
    toast.error(msg, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
}

//Check for duplicate options
const checkDuplicateOptions=(options)=>{
    const valueArray=options.map(option=>option.value);
     const setOfOptions=new Set(valueArray);
     console.log(setOfOptions.size);
     if(setOfOptions.size!==options.length){
         return true;
     }
     return false;
}


export {errToast,validateCurrentQuestion}