import { Input } from './components'
import { FormProvider, useForm } from 'react-hook-form'
import {
  name_validation,
  email_validation,
  num_validation,
  msg_validations,
} from './utils/inputValidations'
import { useState } from 'react'
import { GrMail } from 'react-icons/gr'
import { BsFillCheckSquareFill } from 'react-icons/bs'

export const Form = () => {
  const methods = useForm()
  const [success, setSuccess] = useState(false)

  const onSubmit = methods.handleSubmit(data => {
    console.log(data)
    methods.reset()
    setSuccess(true)
  })

  return (
    <FormProvider {...methods}>
      
      <form
        onSubmit={e => e.preventDefault()}
        noValidate
        autoComplete="off"
        className="container"   
      >  
       <div class="bg-gradient-to-r from-white-900 to-white-200 p-5 rounded-lg">
        <div className="grid gap-5 md:grid-cols-2">
          <Input {...name_validation} />
          <Input {...email_validation} />  
          <Input {...num_validation} />
          
          <Input {...msg_validations} className="md:col-span-2" />
        </div>
        <div className="mt-5">
          {success && (
            <p className="font-regular text-green-500 mb-5 flex items-center gap-1">
              <BsFillCheckSquareFill /> Thanks! Form has been submitted successfully.
            </p>
          )}
          <button
            onClick={onSubmit}
            className="p-2 rounded-md bg-blue-500 font-regular text-white flex items-center gap-1 hover:bg-black"
          >
           
            Submit 
          </button>
        </div>
        </div>
      </form>
    </FormProvider>
  )
}
