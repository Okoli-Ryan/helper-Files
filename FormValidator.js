//form validator template

import { useState } from 'react'

const emailValidationRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const useFormValidation = () => {
  // initial state for form
  const [data, setData] = useState({
    data: {
      fullname: {
        isValid: { valid: false, error: 'Name cannot be empty' },
        value: '',
        validator: val => {
          if (val.length !== 0) {
            return { valid: true, error: '' }
          } else {
            return { valid: false, error: 'Name cannot be empty' }
          }
        }
      },
      username: {
        isValid: { valid: false, error: 'Username cannot be empty' },
        value: '',
        validator: val => {
          if (val.length !== 0) {
            return { valid: true, error: '' }
          } else {
            return { valid: false, error: 'Username cannot be empty' }
          }
        }
      },
      email: {
        isValid: { valid: false, error: 'email cannot be empty' },
        value: '',
        validator: val => {
          if (emailValidationRegex.test(val)) {
            if (val.length > 2) {
              return { valid: true, error: '' }
            } else {
              return {
                valid: false,
                error: 'at least 3 characters for email address'
              }
            }
          }
          return { valid: false, error: 'Input is not an email address' }
        }
      },
      password: {
        isValid: { valid: false, error: 'Password cannot be empty' },
        value: '',
        validator: val => {
          if (val.length > 5) {
            return { valid: true, error: '' }
          } else {
            return {
              valid: false,
              error: 'at least 6 characters for a password'
            }
          }
        }
      },
      number: {
        isValid: { valid: false, error: 'Number cannot be empty' },
        value: '',
        validator: val => {
          if (val.length >= 10) {
            return { valid: true, error: '' }
          } else {
            return {
              valid: false,
              error: 'Number must have at least 10 characters'
            }
          }
        }
      },
      gender: {
        isValid: { valid: true, error: '' },
        value: 'key0',
        validator: val => {
          return { valid: true, error: '' }
        }
      },
      numberHeader: {
        isValid: { valid: true, error: '' },
        value: 'key0',
        validator: val => {
          return { valid: true, error: '' }
        }
      },
      agreedCheckbox: {
        isValid: { valid: false, error: 'Must be checked first' },
        value: false,
        validator: val => {
          if (val !== true) {
            return { valid: false, error: 'Must be checked first' }
          } else return { valid: true, error: '' }
        }
      }
    }
  })

  // update form handler
  const setHandler = (key, input) => {
    setData(prevData => {
      return {
        data: {
          ...prevData.data,
          [key]: {
            ...prevData.data[key],
            value: input,
            isValid: prevData.data[key].validator(input)
          }
        }
      }
    })
  }

  return { data, setHandler }
}
export default useFormValidation
