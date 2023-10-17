import React from 'react'

const Input = ({className,placeholder,onChange}) => {
  return (
   <input type="text"  className={className} placeholder = {placeholder} onChange = {onChange} />
  )
}

export default Input