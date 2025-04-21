
import MainSlide from "@/components/mainSlide/mainSlide";
import SubSlide from "@/components/subSlide/subSlide";
import UserCard from "@/components/userCard/userCard";


export default function Home() {
  return (
    <div className="w-full h-full">
      <MainSlide />
      <SubSlide />
      <UserCard />
    </div>
  );
}
