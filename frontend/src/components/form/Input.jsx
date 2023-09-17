import React, {useState} from 'react'
import styled from 'styled-components'



export default function Input({id,onChange,errorMessage, ...props}) {
  const [touched, setTouched] = useState(false)
  const handleTouch = ()=> {
    setTouched(true)
  }
  return (
    <LabelContainer htmlFor={id}>
        {id}
        <input
          {...props}
          onBlur={handleTouch}   
          onFocus={()=> props.name === 'password2'? setTouched(true):''}
          focused={touched.toString()}    
          onChange={onChange} 
        />
        <span className='error'>{errorMessage}</span>
    </LabelContainer>
    
  )
}

const LabelContainer = styled.label`
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    font-size: 1.3rem;
    color: var(--dark-grey);
    font-weight: 600;
    text-transform: capitalize;
    
    input {
        height: 4.5rem;
        border-radius: 40px;
        background:#Fff;
        padding: 0 2.4rem;
        width: 100%;
        border: 1px solid #ccc;
        outline: none;
        font-size: 1.7rem;
        font-weight: 400;
        transition: all .2s;
        &:hover {
          border: 1px solid #222;
          box-shadow: 0 2px 3px rgba(0,0,0,.08);
        }
        &:focus {
            border: 1px solid #222;
        }
        &.inputError {
          border: 1px solid var(--red);
        }
        &:invalid[focused='true'] ~ span {
          display:block;
        }
        &:invalid[focused='true']{
          border: 1px solid var(--red);
        }
        &:valid[focused='true']{
          border: 1px solid var(--green);
        }
    }

    span {
      font-size: 1.1rem;
      color: #c61212;
      font-weight: 600;
      display:none;
    }
`
