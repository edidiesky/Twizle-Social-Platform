import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const InputTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '4px',
    backgroundColor: 'var(--white)',
    border: '1px solid var(--border1)',
    fontFamily: "CustomFont_Normal, sans-serif",


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
    padding: '24px 10px',
    paddingBottom:"7px",
    
    fontSize: '17px',
    fontWeight: 'Normal',
    fontFamily: "CustomFont_Normal, sans-serif",
    lineHeight:"1.15",
    color: "var(--dark-1)"

  },
  '& .MuiInputLabel-root': {
    fontSize: '17px',
    fontWeight: 'Normal',
    color: 'var(--dark-1)'
  },
  '& .MuiInputLabel-root.Mui-focused': {
    // Styles when the form is focused
    color: 'var(--dark-1)',
    fontWeight: 'Normal',
    fontFamily: "CustomFont_Normal, sans-serif",

  },
  '& .MuiInputLabel-shrink': {
    transform: 'translate(12px, 7px) scale(0.8)',
    color: 'var(--dark-1)', fontWeight: "normal"
  },
}));

const AreaTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '4px',
    backgroundColor: 'var(--white)',
    border: '1px solid var(--border1)',
    fontFamily: "CustomFont_Normal, sans-serif",


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
    padding: '14px 0px',
    paddingBottom: "7px",

    fontSize: '17px',
    fontWeight: 'Normal',
    fontFamily: "CustomFont_Normal, sans-serif",
    lineHeight: "1.15",
    color: "var(--dark-1)"

  },
  '& .MuiInputLabel-root': {
    fontSize: '17px',
    fontWeight: 'Normal',
    color: 'var(--dark-1)'
  },
  '& .MuiInputLabel-root.Mui-focused': {
    // Styles when the form is focused
    color: 'var(--dark-1)',
    fontWeight: 'Normal',
    fontFamily: "CustomFont_Normal, sans-serif",

  },
  '& .MuiInputLabel-shrink': {
    transform: 'translate(14px, 7px) scale(0.8)',
    color: 'var(--dark-1)', fontWeight: "normal"
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
  if (types === 'textarea') {
    return (
      <AreaTextField
        label={label}
        type={type}
        variant="outlined"
        fullWidth
        value={state}
        onChange={handleFormInput}
        multiline={types === 'textarea'}
      />
    );
  }

  return (
    <InputTextField
      label={label}
      type={type}
      variant="outlined"
      fullWidth
      value={state}
      onChange={handleFormInput}
      multiline={types === ''}

    />
  );
 
};

export default FormInput;
