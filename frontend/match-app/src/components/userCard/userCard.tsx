'use client'
import { responseUserType } from "@/lib/getAllUsers";
import Button from "../button";
import { HTMLAttributes } from "react";
import ClientBtn from "../clientbutton/clientBtn";

type userCardType = {
  userid: number,
  username: string,
  fieldtype: string,
} & HTMLAttributes<HTMLDivElement>  

export default function UserCard({userid, username, fieldtype, ...props}: userCardType){
  return(
    <div {...props}>
      <div>
        Username: {username}
      </div>

      <div>
        desire field: {fieldtype}
      </div>

      <ClientBtn text="go to chat" onclickfunction={() => {console.log(userid)}}/>
    </div>
  )
}