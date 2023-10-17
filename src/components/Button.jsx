import React from 'react'

const Button = ({className,text, onClick, btnsize}) => {
  return (
    <button className={className}  onClick={onClick} btnsize = {btnsize}>{text}</button>
  )
}

export default Button