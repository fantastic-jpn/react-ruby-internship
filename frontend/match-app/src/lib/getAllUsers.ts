'use server'

import { z } from "zod"

const userSchema = z.object({
  id: z.number(),
  username: z.string().email(),
  fieldtype: z.string()
})

export type responseUserType = z.infer<typeof userSchema>

const usersArrSchema = z.array(userSchema)

export type responseUsersType = z.infer<typeof usersArrSchema>


export async function getAllUsers(){
  try{
        const response = await fetch("http://backend:3000/users")
        const data = await response.json()

        const result = usersArrSchema.safeParse(data)
        if (!result.success){
          throw new Error("invalid type")
        }else{
          const validUsersData: responseUsersType = result.data

          return validUsersData
        }
      }catch(error){
        console.error(error)
  
        throw new Error("cannot get users data")
      }
}