'use client'

import { useState } from "react"
import Input from "../InputFIeld/input"
import Button from "../button"
import { corpLogin } from "@/lib/corplogin"
import { revalidatePath } from "next/cache"

type corploginType = {
  username?: string[],
  name?: string[],
}

type corploginPropType = {
  userid: string
}

export default function CorpLogin({userid}: corploginPropType){
  const [errors, setErrors] = useState<corploginType>()
  
    const handleSubmit = async(e: React.FormEvent) => {
      e.preventDefault()
  
      const formdata = new FormData(e.target as HTMLFormElement)
      const response = await corpLogin(formdata, userid)
  
      if(!response)return
  
      setErrors(response)
    } 
  
    return(
      <form className="w-full max-w-md bg-white p-10 rounded-2xl shadow-xl flex flex-col gap-8" onSubmit={handleSubmit}>
          <h2 className="text-3xl font-bold text-center text-blue-600">Login</h2>
  
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
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Corporation name
            </label>
            <Input id="name" name="name" placeholder="Corporation name"/>
            {errors?.name && (
              <p className="text-red-500 text-sm">{errors.name[0]}</p>
            )}
          </div>
  
          <div className="mt-6">
            <Button type="submit" className="w-full">
              Start chatting
            </Button>
          </div>
        </form>
    )
}