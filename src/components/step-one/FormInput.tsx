import { FormEvent, useState } from "react"
interface RegexMap {
  [key: string]: RegExp
}
const REGEX: RegexMap = {
  name: /^[A-Za-z]+( [A-Za-z]+){1,4}$/, // Client name
  email: /^[a-z]+[a-z\d.-_]+@[a-z]+\.[a-z]{2,3}$/i, // Email
  phone: /^\d{10}$/ // Phone
}
interface FormInputProps {
    label: string
    input_type: string
    id: string
    placeholder: string
}
function FormInput({label, input_type, id, placeholder}: FormInputProps) {
  
  return (
    <div className='flex flex-col'>
      <label htmlFor={id}>{label}</label>
      <input className='border border-solid border-cool-gray rounded-md p-2' type={input_type} id={id} placeholder={placeholder}/>
    </div>
  )
}
export default FormInput
