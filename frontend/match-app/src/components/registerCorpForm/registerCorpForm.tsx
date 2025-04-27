'use client'

import { useState } from "react";
import Button from "../button";
import Input from "../InputFIeld/input";
import Selection from "../selection";
import { AddCorp } from "@/lib/addCorp";

type CorpFormErrorsType = {
  username?: string[],
    corpName?: string[],
    corptype?: string[],
}

export default function RegisterCorpForm(){

  const [errors, setErrors] = useState<CorpFormErrorsType>()

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault()

    const formdata = new FormData(e.target as HTMLFormElement)

    const response = await AddCorp(formdata)

    if(!response) return

    setErrors(response)
  }

  return(
    <form className="w-full max-w-md bg-white p-10 rounded-2xl shadow-xl flex flex-col gap-8" onSubmit={handleSubmit}>
            <h2 className="text-3xl font-bold text-center text-blue-600">Register New Corporation Intern</h2>
    
            <div className="flex flex-col gap-2">
              <label htmlFor="username" className="text-sm font-medium text-gray-700">
                Username
              </label>
              <Input id="username" name="username" placeholder="Enter your Email" type="email"/>
              {
                errors?.username &&(
                  <p className="text-sm text-red-500">{errors.username[0]}</p>
                )
              }
            </div>
    
            <div className="flex flex-col gap-2">
              <label htmlFor="corpName" className="text-sm font-medium text-gray-700">
                Corporation Name
              </label>
              <Input id="name" name="name" placeholder="Enter your Corporation name" type="text"/>
              {
                errors?.corpName &&(
                  <p className="text-sm text-red-500">{errors.corpName[0]}</p>
                )
              }
            </div>
  
    
            <div>
              <label htmlFor="corptype" className="text-sm font-medium text-gray-700">
                Main Field:
              </label>
              <Selection values={["front-end","back-end", "full-stack", "AI engineer",  ]} name="fieldtype" id="fieldtype" />
              {
                errors?.corptype &&(
                  <p className="text-sm text-red-500">{errors.corptype[0]}</p>
                )
              }
            </div>
    
            <div className="mt-6">
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </div>
          </form>
  )
}