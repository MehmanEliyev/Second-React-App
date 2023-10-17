import React from 'react';
import Input from './Input';
import Button from './Button';
import Label from './Label';

const Form = ({className,title,description}) => {

  const register = ()=>{
    alert("Successiful");
  }

const onHandleChange = (event)=>{
 return event.target.value;
}
  const reset = (onHandleChange)=>{
    console.log(onHandleChange);
  }

  return (
    <form className={className}>
      <svg viewBox="0 0 50 50" width="25px" height="25px"><path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"/></svg>
      <h1>{title}</h1>
      <p className='mb-4'>{description}</p>
        <Label className = "reg-label" title = "Name"/>
        <Input className="form-control mt-2 mb-4" placeholder = "Your Name" onChange = {onHandleChange}/>
        <Label className = "reg-label " title = "Surname"/>
        <Input className="form-control mt-2 mb-4" placeholder = "Your SurName" onChange = {onHandleChange}/>
        <Label className = "reg-label " title = "E-mail"/>
        <Input className="form-control mt-2 mb-4" placeholder = "Your E-mail" onChange = {onHandleChange}/>
        <Label className = "reg-label " title = "Phone Number"/>
        <Input className="form-control mt-2 mb-4" placeholder = "Your Phone Number" onChange = {onHandleChange}/>
        <Label className = "reg-label " title = "Password"/>
        <Input className="form-control mt-2 mb-4" placeholder = "Your Password" onChange = {onHandleChange}/>

        <Button className="btn-success mt-4 mr-4" btnsize = "large" text = "Sign In" onClick = {register}/>
        <Button className="btn-danger mt-4"  text = "Reset" onClick = {reset}/>

    </form>
  )
}

export default Form