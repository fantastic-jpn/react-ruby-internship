'use client'
import { responseUserType } from "@/lib/getAllUsers";
import Button from "../button";
import { HTMLAttributes } from "react";
import ClientBtn from "../clientbutton/clientBtn";
import { redirect } from "next/navigation";

type userCardType = {
  userid: number,
  username: string,
  fieldtype: string,
} & HTMLAttributes<HTMLDivElement>  

export default function UserCard({ userid, username, fieldtype, ...props }: userCardType) {
  return (
    <div
      {...props}
      className="w-full max-w-md bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="mb-4">
        <p className="text-sm text-gray-500">Username</p>
        <p className="text-lg font-semibold text-gray-800">{username}</p>
      </div>

      <div className="mb-6">
        <p className="text-sm text-gray-500">Desired Field</p>
        <p className="text-lg font-medium text-blue-600">{fieldtype}</p>
      </div>

      <ClientBtn
        text="Go to Chat"
        onclickfunction={() => {
          redirect(`/${userid}`)
        }}
      />
    </div>
  );
}