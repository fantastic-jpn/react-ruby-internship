'use server'
import Button from "@/components/button";
import MainSlide from "@/components/mainSlide/mainSlide";
import SubSlide from "@/components/subSlide/subSlide";
import Testbtn from "@/components/testbutton";
import UserCard from "@/components/userCard/userCard";
import { getAllUsers, responseUsersType } from "@/lib/getAllUsers";


export default async function Home() {

  const usersdata: responseUsersType = await getAllUsers()
  return (
    <div className="w-full h-full">
      
      <MainSlide />
      <SubSlide />
      <section className=" flex gap-2">

      {
        usersdata.map(user => (
          
          <UserCard key={user.id} userid={user.id} username={user.username} fieldtype={user.fieldtype}/>
        ))
      }
      </section>
    </div>
  );
}
