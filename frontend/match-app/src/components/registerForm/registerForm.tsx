'use client'
import { AddUser } from "@/lib/addUser";
import Button from "../button";
import Input from "../InputFIeld/input";
import InputPass from "../InputFIeld/inputPass";
import { useState } from "react";
import Selection from "../selection";

type FormErrorsType = {
  username?: string[],
  password?: string[],
  confirmPassword?: string[],
  fieldtype?: string[],

};

export default function RegisterForm(){

  const [errors, setErrors] = useState<FormErrorsType>()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const formdata = new FormData(e.target as HTMLFormElement)
    const response = await AddUser(formdata)

    if(!response) return

    setErrors(response)
  }

  return(
    <form className="w-full max-w-md bg-white p-10 rounded-2xl shadow-xl flex flex-col gap-8" onSubmit={handleSubmit}>
        <h2 className="text-3xl font-bold text-center text-blue-600">Register New User</h2>

        <div className="flex flex-col gap-2">
          <label htmlFor="username" className="text-sm font-medium text-gray-700">
            Username
          </label>
          <Input id="username" name="username" placeholder="Enter your Email" type="email"/>
          {errors?.username && (
            <p className="text-red-500 text-sm">{errors.username[0]}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-sm font-medium text-gray-700">
            Password
          </label>
          <InputPass id="password" name="password" placeholder="password"/>
          {errors?.password && (
            <p className="text-red-500 text-sm">{errors.password[0]}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <Input id="confirmPassword" name="confirmPassword" type="password" placeholder="Re-enter password" />
          {errors?.confirmPassword && (
            <p className="text-red-500 text-sm">{errors.confirmPassword[0]}</p>
          )}
        </div>

        <div>
          <label htmlFor="fieldtype" className="text-sm font-medium text-gray-700">
            Main Field:
          </label>
          <Selection values={["front-end","back-end", "full-stack", "AI engineer",  ]} name="fieldtype" id="fieldtype" />
          {
            errors?.fieldtype &&(
              <p className="text-sm text-red-500">{errors.fieldtype[0]}</p>
            )
          }
        </div>
           

        <div className="mt-6">
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </div>

        <p className=" text-sm">*password must be more than six characters long</p>
      </form>
  )
}