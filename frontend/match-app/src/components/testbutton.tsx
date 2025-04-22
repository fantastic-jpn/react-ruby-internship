'use client'
import Button from "./button";

type userType = {
  username: string, 
  password: string,
  fieldtype: string
}

export default function Testbtn(){

  const testConnection = async () => {
    const data: userType = {username: "test1", password: "testing", fieldtype:"test"}

    const response = await fetch("http://backend:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: data }), 
    });
  
    if (!response.ok) {
      console.error(await response.text());
      throw new Error("Failed to register user.");
    }

    console.log("no errors")
  }

  return(
    <Button onClick={() => testConnection}>
      submit
    </Button>
  )
}