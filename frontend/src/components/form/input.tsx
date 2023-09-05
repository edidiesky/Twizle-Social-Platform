import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const InputTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '4px',
    backgroundColor: 'var(--white)',
    border: '1px solid var(--border)',
    fontFamily: "CustomFont_Normal, sans- serif",


    '& fieldset': {
      borderColor: 'transparent',
    },
    '&:hover fieldset': {
      borderColor: 'transparent',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'transparent',
    },
    '&.Mui-focused ': {
      border: '2px solid var(--blue-1)',
    },
  },
  '& .MuiOutlinedInput-input': {
    padding: '18px 10px',
    fontSize: '16px',
    fontWeight: 'light',
    fontFamily: "CustomFont_Normal, sans- serif",

    color: "var(--dark-1)"

  },
  '& .MuiInputLabel-root': {
    fontSize: '16px',
    fontWeight: 'light',
    color: 'var(--dark-1)'
  },
  '& .MuiInputLabel-root.Mui-focused': {
    // Styles when the form is focused
    color: 'var(--blue-1)',
    fontWeight: 'light',
  },
  '& .MuiInputLabel-shrink': {
    transform: 'translate(12px, 7px) scale(0.7)',
    color: 'var(--blue-1)', fontWeight: "normal"
  },
}));

type EditInput = {
  types?: String
}

// Define the prop type for the setState function
type SetStateProp<T> = React.Dispatch<React.SetStateAction<T>>

type EditInputTypes = {
  state?: string;
  label?: string;
  type?: string;
  setState?: (val: string) => void;
  // bio?: string;
  // setBio?: SetStateProp<string>;
  // location?: string;
  // setLocation?: SetStateProp<string>;
  // website?: string;



  // setWebsite?: SetStateProp<string>;
};

type FormInputProps = EditInput & EditInputTypes;


const FormInput: React.FC<FormInputProps> = ({ types, type, setState, state, label }) => {
  const handleFormInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setState) {
      setState(e.target.value);
    }
  }

  return (
    <InputTextField
      label={label}
      type={type}
      variant="outlined"
      fullWidth
      value={state}
      onChange={handleFormInput}
      multiline={types === 'textarea'}
    />
  );
};

export default FormInput;
