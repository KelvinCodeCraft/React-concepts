import React, { useState } from 'react';
import './App.css'


const FormValidationExample = () => {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
        ...formData, [name] : value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = {}
    if(!formData.username.trim()){
      validationErrors.username = "username is required"
    }

    if(!formData.email.trim()){
      validationErrors.email = "email is required"
    } else if(!/\S+@\S+\.\S+/.test(formData.email)){
      validationErrors.email = "email is invalid"
    } else if(formData.email.length < 5){
      validationErrors.email = "email must be at least 5 characters"
    } else if(formData.email.length > 50){
      validationErrors.email = "email must be at most 50 characters"
    }

    if(!formData.password.trim()){
      validationErrors.password = "password is required"
    } else if(formData.password.length < 8){
      validationErrors.password = "password must be at least 8 characters"
    }

    if(!formData.confirmPassword.trim()){
      validationErrors.confirmPassword = "confirm password is required"
    }
    else if(formData.confirmPassword !== formData.password){
      validationErrors.confirmPassword = "passwords do not match"
    }

    setErrors(validationErrors)

    if(Object.keys(validationErrors).length === 0){
      console.log("Form submitted successfully", formData)
    }

  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          placeholder='username'  
          autoComplete='off'  
          onChange={handleChange}  
        />
          {errors.username && <span>{errors.username}</span>}  
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder='example@gmail.com'
          autoComplete='off'
          onChange={handleChange}
        />
          {errors.email && <span>{errors.email}</span>}  
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder='******'
          onChange={handleChange}
        />
          {errors.password && <span>{errors.password}</span>}  
      </div>
      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder='******'
          onChange={handleChange}
        />
          {errors.confirmPassword && <span>{errors.confirmPassword}</span>}  
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};


export default FormValidationExample;
