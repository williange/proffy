import React, { ButtonHTMLAttributes } from 'react'

import './style.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string,
    handler: any
}

const Button : React.FC<ButtonProps> = ({ text, handler, ...rest }) => {
  return (
    <button className="custom-button" onClick={handler} {...rest}>
      {text}
    </button>
  )
}

export default Button
