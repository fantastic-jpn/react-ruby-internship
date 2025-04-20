import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-10 py-6 bg-white shadow-sm">
      <h1 className="text-2xl font-bold text-blue-600 tracking-tight">
        <Link href={"/"}>Dummy Corp.</Link>
      </h1>

      <nav>
        <ul className="flex gap-8 text-gray-700 font-medium">
          <li className="hover:text-blue-600 transition cursor-pointer">
            <Link href={"/register"}>アカウント追加</Link> 
          </li>
          {/* <li className="hover:text-blue-600 transition cursor-pointer">
            <Link href={"/registercorp"}>企業様はこちら</Link>
          </li> */}
          {/* <li className="hover:text-blue-600 transition cursor-pointer">
            <Link href={"/login"}>ログイン</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}