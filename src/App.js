import { useState, useEffect } from 'react'
import './bootstrap.min.css'

export default function App() {

  const [email, setEmail] = useState('')
  const [alert, setAlert] = useState({show:false, msg:'',type:''});

  const submitBtn = (e) => {
    e.preventDefault();
    if (!email) {
    // display alert
    showAlert(true, 'danger', 'Please enter the values')
    } else {
    // show alert
    // add item to list
    showAlert(true, 'success', 'Form submission successful!')
    console.log(email)
    }
  }

  const showAlert = (show=false, type="", msg="") => {
    setAlert({show, type, msg})
  }

  return (
    <div className="App">
      <form onSubmit= {submitBtn} >
        {alert.show && <Alert {...alert} removeAlert={showAlert}/>}
        <p>Please enter your email:</p>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <button type="submit">Submit</button>
        </form>
    </div>
  );
}

const Alert = ({type, msg, removeAlert }) => {
  useEffect(() => {
      const timeout = setTimeout(() => {
          removeAlert();
      }, 3000)
      return () => clearTimeout(timeout)
  }, [removeAlert])
return (
    <>
      <p className={`alert alert-${type}`}>{msg}</p>
    </>
)
}

// Modify this component to include a form that allows users to submit an email Address
// on submit the title should be updated to a success message
// add email validations to check if the email address entered is valid or not
// show an in line error msg if the email address fails the validation