
import MainSlide from "@/components/mainSlide/mainSlide";
import SubSlide from "@/components/subSlide/subSlide";
import Testbtn from "@/components/testbutton";
import UserCard from "@/components/userCard/userCard";


export default function Home() {
  return (
    <div className="w-full h-full">
      <MainSlide />
      <SubSlide />
      <UserCard />
      <Testbtn />
    </div>
  );
}
