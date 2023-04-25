import React from 'react';

const types = {
  fullName: {
    regex: /^[a-zA-Z\s]*$/,
    errorMessage: "Use only letters and spaces"
  },
  email: {
    regex:
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    errorMessage: 'Invalid Email',
  },
  phone: {
    regex: /\d{6,}/,
    errorMessage: "Invalid phone"
  },
  password: {
    regex:
      /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
    errorMessage:
      'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character',
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function validate(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError('Field must be filled');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].errorMessage);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }
  return {
    value,
    setValue,
    error,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
